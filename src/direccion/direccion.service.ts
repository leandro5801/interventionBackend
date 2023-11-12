import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Direccion } from './direccion.entity';
import { Repository } from 'typeorm';
import { direccionDto } from './dto/direccion.dto';

@Injectable()
export class DireccionService {
  constructor(
    @InjectRepository(Direccion)
    private readonly direccionRepository: Repository<Direccion>,
  ) {}

  async createDireccion(createDireccion: direccionDto) {
    const direccion = this.direccionRepository.create(createDireccion);
    await this.direccionRepository.save(direccion);
    return direccion;
  }
  /**
   *retorna un arreglo de todas las intervenciones
   */
  findAllDireccion(): Promise<Direccion[]> {
    return this.direccionRepository.find();
  }

  /**
   * se pasa un id por parametro y esta funcion devuelve la intervencion con el id
   */
  findDireccionById(idDireccion: number): Promise<Direccion> {
    return this.direccionRepository.findOneBy({ idDireccion });
  }

  /**
   * pasas un id por parametro y podras modificar la intervencion de dicho id
   */
  updateDireccion(
    idDireccion: number,
    DireccionDto: direccionDto,
  ): Promise<Direccion> {
    const direccion: Direccion = new Direccion();
    direccion.idDireccion = idDireccion;
    direccion.nombreDireccion = DireccionDto.nombreDireccion;
    direccion.idUeb = DireccionDto.idUeb;
    return this.direccionRepository.save(direccion);
  }

  /**
 * eliminar la intervencion del id que pases
 *
removeIntervencion(id: number): Promise<{ affected?: number }> {
  return this.intervencionRepository.delete(id); 

}*/

  async deleteDireccion(idDireccion: number) {
    return this.direccionRepository.delete(idDireccion);
  }
}
