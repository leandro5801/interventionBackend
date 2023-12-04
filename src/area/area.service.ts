import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Area } from './area.entity';
import { Repository } from 'typeorm';
import { areaDto } from './dto/area.dto';
import { DireccionService } from 'src/direccion/direccion.service';
import axios from 'axios';

@Injectable()
export class AreaService {
  constructor(
    @InjectRepository(Area) private readonly areaRepository: Repository<Area>,
    private direccionService: DireccionService,
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
    return this.areaRepository.findOneBy({ id_area: idArea });
  }

  findAreaByName(nombreArea: string): Promise<Area> {
    return this.areaRepository.findOneBy({ nombre_area: nombreArea });
  }

  /**
   * pasas un id por parametro y podras modificar la intervencion de dicho id
   */
  updateArea(idArea: number, AreaDto: areaDto): Promise<Area> {
    const area: Area = new Area();
    area.id_area = idArea;
    area.nombre_area = AreaDto.nombre_area;
    area.id_direccion = AreaDto.id_direccion;
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
  // async fetchAreaFromApi() {
  //   const response = await axios.get(
  //     'http://localhost:3005/test/direccionArea',
  //   );
  //   const data = response.data;

  //   const filteredData: { nombre_area: string; id_direccion: number }[] = [];
  //   console.log(data);
  //   Object.keys(data).forEach((objKey) => {
  //     const direccion = data[objKey];
  //     Object.keys(direccion.Area).forEach((dirKey) => {
  //       const direccion = await this.direccionService.findDireccionByName(direccion.Unidad[dirKey]);
  //       const areaObj = direccion.Area[dirKey];
  //       console.log(areaObj.Area);
  //       filteredData.push({ nombre_area: areaObj.Area, id_direccion: 1 });
  //     });
  //   });
  //   await this.areaRepository.save(filteredData);
  // }
  async fetchAreaFromApi() {
    const response = await axios.get(
      'http://localhost:3005/test/direccionArea',
    );
    const data = response.data;
    const filteredData: { nombre_area: string; id_direccion: number }[] = [];
    for (const objKey of Object.keys(data)) {
      const direccion = data[objKey];
      for (const dirKey of Object.keys(direccion.Area)) {
        const direccionn = await this.direccionService.findDireccionByName(
          data[objKey].Unidad.trim(),
        );
        const areaObj = direccion.Area[dirKey];
        if (direccionn) {
          filteredData.push({
            nombre_area: areaObj.Area,
            id_direccion: direccionn.id_direccion,
          });
        } else {
          console.log('NO hay direcciones');
        }
      }
    }
    await this.areaRepository.save(filteredData);
    return this.areaRepository.find();
  }
}
