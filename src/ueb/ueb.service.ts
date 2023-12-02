import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ueb } from './ueb.entity';
import { Repository } from 'typeorm';
import { uebDto } from './dto/ueb.dto';

@Injectable()
export class UebService {
  constructor(
    @InjectRepository(Ueb) private readonly uebRepository: Repository<Ueb>,
  ) {}

  async createUeb(createUeb: uebDto) {
    const ueb = this.uebRepository.create(createUeb);
    await this.uebRepository.save(ueb);
    return ueb;
  }
  /**
   *retorna un arreglo de todas las intervenciones
   */
  findAllUeb(): Promise<Ueb[]> {
    return this.uebRepository.find();
  }

  /**
   * se pasa un id por parametro y esta funcion devuelve la intervencion con el id
   */
  findUebById(idUeb: number): Promise<Ueb> {
    return this.uebRepository.findOneBy({ id_ueb: idUeb });
  }

  /**
   * pasas un id por parametro y podras modificar la intervencion de dicho id
   */
  updateUeb(idUeb: number, UebDto: uebDto): Promise<Ueb> {
    const ueb: Ueb = new Ueb();
    ueb.id_ueb = idUeb;
    ueb.nombre_ueb = UebDto.nombre_ueb;
    ueb.id_empresa = UebDto.id_empresa;
    return this.uebRepository.save(ueb);
  }

  /**
 * eliminar la intervencion del id que pases
 *
removeIntervencion(id: number): Promise<{ affected?: number }> {
  return this.intervencionRepository.delete(id); 

}*/

  async deleteUeb(idUeb: number) {
    return this.uebRepository.delete(idUeb);
  }
}
