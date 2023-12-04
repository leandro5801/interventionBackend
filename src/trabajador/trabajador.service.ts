import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Trabajador } from './trabajador.entity';
import { Repository } from 'typeorm';
import { trabajadorDto } from './dto/trabajador.dto';
import { AreaService } from 'src/area/area.service';
import axios from 'axios';

@Injectable()
export class TrabajadorService {
  constructor(
    @InjectRepository(Trabajador)
    private readonly trabajadorRepository: Repository<Trabajador>,
    private areaService: AreaService,
  ) {}

  async createTrabajador(createTrabajador: trabajadorDto) {
    const trabajador = this.trabajadorRepository.create(createTrabajador);
    await this.trabajadorRepository.save(trabajador);
    return trabajador;
  }
  /**
   *retorna un arreglo de todas las intervenciones
   */
  findAllTrabajador(): Promise<Trabajador[]> {
    return this.trabajadorRepository.find();
  }

  /**
   * se pasa un id por parametro y esta funcion devuelve la intervencion con el id
   */
  findTrabajadorById(idTrabajador: number): Promise<Trabajador> {
    return this.trabajadorRepository.findOneBy({ id_trabajador: idTrabajador });
  }

  /**
   * pasas un id por parametro y podras modificar la intervencion de dicho id
   */
  updateTrabajador(
    idTrabajador: number,
    TrabajadorDto: trabajadorDto,
  ): Promise<Trabajador> {
    const trabajador: Trabajador = new Trabajador();
    trabajador.id_trabajador = idTrabajador;
    trabajador.nombre_trabajador = TrabajadorDto.nombre_trabajador;
    trabajador.id_area = TrabajadorDto.id_area;
    return this.trabajadorRepository.save(trabajador);
  }

  /**
 * eliminar la intervencion del id que pases
 *
removeIntervencion(id: number): Promise<{ affected?: number }> {
  return this.intervencionRepository.delete(id); 

}*/

  async deleteTrabajador(idTrabajador: number) {
    return this.trabajadorRepository.delete(idTrabajador);
  }
  async fetchTrabajadorFromApi() {
    const response = await axios.get('http://localhost:3005/test/trabajadores');
    const data = response.data;

    const filteredData: { nombre_trabajador: string; id_area: number }[] = [];
    for (const item of data) {
      const area = await this.areaService.findAreaByName(item.AREA);
      item.Trabajador.forEach((trabajador) => {
        if (area) {
          filteredData.push({
            nombre_trabajador: trabajador.NOMBRE,
            id_area: area.id_area,
          });
        } else {
          console.log('NO hay area');
        }
      });
    }
    await this.trabajadorRepository.save(filteredData);
    return this.trabajadorRepository.find();
  }
}
