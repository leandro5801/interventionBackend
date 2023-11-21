import { ClasificacionDto } from './dto/clasificacion.dto';
import { Clasificacion } from './clasificacion.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClasificacionService {
  constructor(
    @InjectRepository(Clasificacion)
    private readonly clasificacionRepository: Repository<Clasificacion>,
  ) {}

  async createClasificacion(createClasificacion: ClasificacionDto) {
    const clasificacion =
      this.clasificacionRepository.create(createClasificacion);
    await this.clasificacionRepository.save(clasificacion);
    return clasificacion;
  }
  /**
   *retorna un arreglo de todas las clasificaciones
   */
  findAllClasificacion(): Promise<Clasificacion[]> {
    return this.clasificacionRepository.find();
  }

  /**
   * se pasa un id por parametro y esta funcion devuelve la clasificacion con el id
   */
  findClasificacionById(id_clasificacion: number): Promise<Clasificacion> {
    return this.clasificacionRepository.findOneBy({ id_clasificacion });
  }

  /**
   * pasas un id por parametro y podras modificar la clasificacion de dicho id
   */
  async updateClasificacion(
    id_clasificacion: number,
    clasificacionDto: ClasificacionDto,
  ) {
    await this.clasificacionRepository.update(
      id_clasificacion,
      clasificacionDto,
    );
  }

  /**
   * pasas un id por parametro y podras eliminar la clasificacion de dicho id
   */
  async delete(id_clasificacion: number) {
    return this.clasificacionRepository.delete(id_clasificacion);
  }
}
