import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Area } from './area.entity';
import { Repository } from 'typeorm';
import { areaDto } from './dto/area.dto';

@Injectable()
export class AreaService {
  constructor(
    @InjectRepository(Area) private readonly areaRepository: Repository<Area>,
  ) {}

  async createArea(createArea: areaDto) {
    const area = this.areaRepository.create(createArea);
    await this.areaRepository.save(area);
    return area;
  }
  /**
   *retorna un arreglo de todas las intervenciones
   */
  findAllArea(): Promise<Area[]> {
    return this.areaRepository.find();
  }

  /**
   * se pasa un id por parametro y esta funcion devuelve la intervencion con el id
   */
  findAreaById(idArea: number): Promise<Area> {
    return this.areaRepository.findOneBy({ idArea });
  }

  /**
   * pasas un id por parametro y podras modificar la intervencion de dicho id
   */
  updateArea(idArea: number, AreaDto: areaDto): Promise<Area> {
    const area: Area = new Area();
    area.idArea = idArea;
    area.nombreArea = AreaDto.nombreArea;
    area.idDireccion = AreaDto.idDireccion;
    return this.areaRepository.save(area);
  }

  /**
 * eliminar la intervencion del id que pases
 *
removeIntervencion(id: number): Promise<{ affected?: number }> {
  return this.intervencionRepository.delete(id); 

}*/

  async deleteArea(idArea: number) {
    return this.areaRepository.delete(idArea);
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
