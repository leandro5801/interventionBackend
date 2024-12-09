import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Direccion } from './direccion.entity';
import { Repository } from 'typeorm';
import { direccionDto } from './dto/direccion.dto';
import axios from 'axios';
import { UebService } from 'src/ueb/ueb.service';
@Injectable()
export class DireccionService {
  constructor(
    @InjectRepository(Direccion)
    private readonly direccionRepository: Repository<Direccion>,
    private uebService: UebService,
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
    return this.direccionRepository.findOneBy({ id_direccion: idDireccion });
  }
  findDireccionByName(nombreDireccion: string): Promise<Direccion> {
    return this.direccionRepository.findOneBy({
      nombre_direccion: nombreDireccion,
    });
  }

  /**
   * pasas un id por parametro y podras modificar la intervencion de dicho id
   */
  updateDireccion(
    idDireccion: number,
    DireccionDto: direccionDto,
  ): Promise<Direccion> {
    const direccion: Direccion = new Direccion();
    direccion.id_direccion = idDireccion;
    direccion.nombre_direccion = DireccionDto.nombre_direccion;
    direccion.id_ueb = DireccionDto.id_ueb;
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

  async fetchDireccionFromApi(nombreEmpresa: string, nombreUeb: string) {
    console.log(nombreEmpresa);
    console.log(nombreUeb);

    const response = await axios.get(
      'http://localhost:3005/test/direccionArea',
    );
    const data = response.data;
    const processedData: {
      id_direccion?: number;
      nombre_direccion: string;
      id_ueb: number;
    }[] = [];
    for (const key in data) {
      const ueb = await this.uebService.findUebByName('AICA');
      let direccion = await this.direccionRepository.findOne({
        where: { nombre_direccion: data[key].Unidad.trim() },
      });
      if (direccion) {
        direccion.nombre_direccion = data[key].Unidad.trim();
        direccion.id_ueb = ueb.id_ueb;
      } else {
        direccion = {
          id_direccion: undefined,
          nombre_direccion: data[key].Unidad.trim(),
          id_ueb: ueb.id_ueb,
        };
      }
      processedData.push(direccion);
    }

    await this.direccionRepository.save(processedData);
    return this.direccionRepository.find();
  }
}
