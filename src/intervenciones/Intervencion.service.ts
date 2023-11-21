import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Intervencion } from './intervencion.entity';
import { Repository } from 'typeorm';
import { IntervencionDto } from './dto/intervencion.dto';

@Injectable()
export class IntervencionService {
  constructor(
    @InjectRepository(Intervencion)
    private readonly intervencionRepository: Repository<Intervencion>,
  ) {}

  async createIntervencion(createIntervencion: IntervencionDto) {
    const intervencion = this.intervencionRepository.create(createIntervencion);
    await this.intervencionRepository.save(intervencion);
    return intervencion;
  }
  /**
   *retorna un arreglo de todas las intervenciones
   */
  findAllIntervencion(): Promise<Intervencion[]> {
    return this.intervencionRepository.find();
  }

  /**
   * se pasa un id por parametro y esta funcion devuelve la intervencion con el id
   */
  findIntervencionById(id_intervencion: number): Promise<Intervencion> {
    return this.intervencionRepository.findOneBy({ id_intervencion });
  }

  /**
   * pasas un id por parametro y podras modificar la intervencion de dicho id
   */
  async updateIntervencion(
    id_intervencion: number,
    IntervencionDto: IntervencionDto,
  ) {
    await this.intervencionRepository.update(id_intervencion, IntervencionDto);
    const interUpdate = await this.findIntervencionById(id_intervencion);
    return interUpdate;
  }

  /**
 * eliminar la intervencion del id que pases
 *
removeIntervencion(id: number): Promise<{ affected?: number }> {
  return this.intervencionRepository.delete(id); 

}*/

  async delete(id_intervencion: number) {
    return this.intervencionRepository.delete(id_intervencion);
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
