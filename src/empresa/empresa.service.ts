import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Empresa } from './empresa.entity';
import { Repository } from 'typeorm';
import { empresaDto } from './dto/empresa.dto';

@Injectable()
export class EmpresaService {
  constructor(
    @InjectRepository(Empresa)
    private readonly empresaRepository: Repository<Empresa>,
  ) {}

  async createEmpresa(EmpresaDto: empresaDto) {
    // if (!EmpresaDto.cargar_empresa) {
    const empresa = this.empresaRepository.create(EmpresaDto);
    await this.empresaRepository.save(empresa);
    return empresa;
    // } else {
    //   const empresa = this.empresaRepository.create({
    //     nombre_empresa: 'AICA+',
    //     cargar_empresa: true,
    //   });
    //   await this.empresaRepository.save(empresa);
    //   return empresa;
    // }
  }
  /**
   *retorna un arreglo de todas las intervenciones
   */
  findAllEmpresa(): Promise<Empresa[]> {
    return this.empresaRepository.find();
  }

  /**
   * se pasa un id por parametro y esta funcion devuelve la intervencion con el id
   */
  findEmpresaById(idEmpresa: number): Promise<Empresa> {
    return this.empresaRepository.findOneBy({ id_empresa: idEmpresa });
  }

  findEmpresaByName(nombreEmpresa: string): Promise<Empresa> {
    return this.empresaRepository.findOneBy({ nombre_empresa: nombreEmpresa });
  }
  /**
   * pasas un id por parametro y podras modificar la intervencion de dicho id
   */
  updateEmpresa(idEmpresa: number, EmpresaDto: empresaDto): Promise<Empresa> {
    const empresa: Empresa = new Empresa();
    empresa.id_empresa = idEmpresa;
    empresa.nombre_empresa = EmpresaDto.nombre_empresa;
    empresa.cargar_empresa = EmpresaDto.cargar_empresa;
    return this.empresaRepository.save(empresa);
  }
  /**
 * eliminar la intervencion del id que pases
 *
removeIntervencion(id: number): Promise<{ affected?: number }> {
  return this.intervencionRepository.delete(id); 

}*/

  async deleteEmpresa(idEmpresa: number) {
    return this.empresaRepository.delete(idEmpresa);
  }

  /*async filterAux(intervention: any): Promise<Intervencion[]>{
  if (Intervencion.startDate){
  if(IntervencionDto.endDate){
   return await this.intervencionRepository.find(
     {IntervencionDto,
       startDate:{
         $gte: intervencionDto.startDate,
         $lt: IntervencionDto.endDate
       },
       endDate:{
         $gte: IntervencionDto.startDate,
         $lt: IntervencionDto.endDate
       }
     })
     console.log(interventionDTO.endDate);
   }

     else{
   return await this.intervencionRepository.find(
     {IntervencionDto,
       startDate:{
         $gte: intervencionDto.startDate,
      //   $lt: ""
       },
       endDate:{
         $gte: intervencionDto.startDate,
       //  $lt: ""
       }
     })}
  }

  else{
   return await this.intervencionRepository.find(interventionDTO);}
 }*/

  /*

  async update(id: string, createdIntervencionDto: IntervencionDTO) {
    if (await this.findOne(id)) {
      await this.intervencionRepository.update(id, createIntervenDto);
      const intervenUpdate = await this.findOne(id);
      return intervenUpdate;
    }
  }

  async remove(id: number) {
    const deleteInterven = await this.intervencionRepository.delete(id);
    if (!deleteInterven.affected) {
      throw new NotFoundException(`Context with id ${id} not found`);
    }
  }*/
}
