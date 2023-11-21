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
    const proyecto = this.proyectoRepository.create(createProyecto);
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
  findProyectoById(id_proyecto: number): Promise<Proyecto> {
    return this.proyectoRepository.findOneBy({ id_proyecto });
  }

  /**
   * pasas un id por parametro y podras modificar la intervencion de dicho id
   */
  updateProyecto(
    id_proyecto: number,
    ProyectoDto: proyectoDto,
  ): Promise<Proyecto> {
    const proyecto: Proyecto = new Proyecto();
    proyecto.id_proyecto = id_proyecto;
    proyecto.id_cliente = ProyectoDto.id_cliente;
    proyecto.nombre_proyecto = ProyectoDto.nombre_proyecto;
    proyecto.objetivos = ProyectoDto.objetivos;
    proyecto.consultores_asignados_id = ProyectoDto.consultores_asignados_id;
    return this.proyectoRepository.save(proyecto);
  }

  /**
 * eliminar la intervencion del id que pases
 *
removeIntervencion(id: number): Promise<{ affected?: number }> {
  return this.intervencionRepository.delete(id); 

}*/

  async deleteProyecto(id_proyecto: number) {
    return this.proyectoRepository.delete(id_proyecto);
  }
}
