import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Consultor } from './Consultor.entity';
import { Repository } from 'typeorm';
import { consultorDto } from './dto/Consultor.dto';

@Injectable()
export class ConsultorService {
  constructor(
    @InjectRepository(Consultor)
    private readonly consultorRepository: Repository<Consultor>,
  ) {}

  async createConsultor(createConsultor: consultorDto) {
    const consultor = this.consultorRepository.create(createConsultor);
    await this.consultorRepository.save(consultor);
    return consultor;
  }
  /**
   *retorna un arreglo de todas las intervenciones
   */
  findAllConsultor(): Promise<Consultor[]> {
    return this.consultorRepository.find();
  }

  /**
   * se pasa un id por parametro y esta funcion devuelve la intervencion con el id
   */
  findConsultornById(idConsultor: number): Promise<Consultor> {
    return this.consultorRepository.findOneBy({ idConsultor });
  }

  /**
   * pasas un id por parametro y podras modificar la intervencion de dicho id
   */
  updateConsultor(
    idConsultor: number,
    ConsultorDto: consultorDto,
  ): Promise<Consultor> {
    const consultor: Consultor = new Consultor();
    consultor.idConsultor = ConsultorDto.idConsultor;
    consultor.nombreConsultor = ConsultorDto.nombreConsultor;
    return this.consultorRepository.save(consultor);
  }

  /**
 * eliminar la intervencion del id que pases
 *
removeIntervencion(id: number): Promise<{ affected?: number }> {
  return this.intervencionRepository.delete(id); 

}*/

  async deleteConsultor(idConsultor: number) {
    return this.consultorRepository.delete(idConsultor);
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
