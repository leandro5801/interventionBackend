import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Direccion } from './direccion.entity';
import { Repository } from 'typeorm';
import { direccionDto } from './dto/direccion.dto';
import axios from 'axios';
import { UebService } from 'src/ueb/ueb.service';
import { ChargeDireccionDto } from './dto/chargeDireccion';
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
    console.log(idDireccion);
    return this.direccionRepository.delete(idDireccion);
  }

  async fetchDireccionFromApi(chargeDireccionDto: ChargeDireccionDto) {
    const { nombre_empresa, nombre_ueb, uebId } = chargeDireccionDto;

    console.log(chargeDireccionDto);

    const response = await axios.get('http://localhost:3005/structure.json');
    const data = response.data['structure'];
    console.log(data);

    const processedData: {
      id_direccion?: number;
      nombre_direccion: string;
      id_ueb: number;
    }[] = [];
    for (const object of data) {
      //const ueb = await this.uebService.findUebByName('AICA');
      let direccion = await this.direccionRepository.findOne({
        where: { nombre_direccion: object.structure.trim(), id_ueb: uebId },
      });
      if (direccion) {
        direccion.nombre_direccion = object.structure.trim();
        direccion.id_ueb = uebId;
      } else if (object.ueb === nombre_ueb) {
        direccion = {
          id_direccion: undefined,
          nombre_direccion: object.structure,
          id_ueb: uebId,
        };
        processedData.push(direccion);
      }
    }
    await this.direccionRepository.save(processedData);
    return this.direccionRepository.find();
  }
}
