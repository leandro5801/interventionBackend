import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Proyecto } from './proyecto.entity';
import { Repository } from 'typeorm';
import { proyectoDto } from './dto/proyecto.dto';

@Injectable()
export class ProyectoService {
  constructor(
    @InjectRepository(Proyecto)
    private readonly proyectoRepository: Repository<Proyecto>,
  ) {}

  async createProyecto(createProyecto: proyectoDto) {
    const proyecto = this.proyectoRepository.create();
    await this.proyectoRepository.save(proyecto);
    return proyecto;
  }

  /**
   *retorna un arreglo de todas las intervenciones
   */
  findAllProyecto(): Promise<Proyecto[]> {
    return this.proyectoRepository.find();
  }

  /**
   * se pasa un id por parametro y esta funcion devuelve la intervencion con el id
   */
  findProyectoById(idProyecto: number): Promise<Proyecto> {
    return this.proyectoRepository.findOneBy({ idProyecto });
  }

  /**
   * pasas un id por parametro y podras modificar la intervencion de dicho id
   */
  updateProyecto(
    idProyecto: number,
    ProyectoDto: proyectoDto,
  ): Promise<Proyecto> {
    const proyecto: Proyecto = new Proyecto();
    proyecto.idProyecto = ProyectoDto.idProyecto;
    proyecto.nombreProyecto = ProyectoDto.nombreProyecto;
    return this.proyectoRepository.save(proyecto);
  }

  /**
 * eliminar la intervencion del id que pases
 *
removeIntervencion(id: number): Promise<{ affected?: number }> {
  return this.intervencionRepository.delete(id); 

}*/

  async deleteProyecto(idProyecto: number) {
    return this.proyectoRepository.delete(idProyecto);
  }
}
