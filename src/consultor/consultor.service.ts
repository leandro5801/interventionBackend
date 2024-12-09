import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Consultor } from './consultor.entity';
import { Repository } from 'typeorm';
import { consultorDto } from './dto/consultor.dto';

@Injectable()
export class ConsultorService {
  constructor(
    @InjectRepository(Consultor)
    private readonly consultorRepository: Repository<Consultor>,
  ) {}

  async createConsultor(createConsultor: consultorDto) {
    const consultor = this.consultorRepository.create(createConsultor);
    await this.consultorRepository.save(consultor);
    return consultor;
  }
  /**
   *retorna un arreglo de todas las intervenciones
   */
  findAllConsultor(): Promise<Consultor[]> {
    return this.consultorRepository.find();
  }

  /**
   * se pasa un id por parametro y esta funcion devuelve la intervencion con el id
   */
  findConsultorById(id_consultor: number): Promise<Consultor> {
    return this.consultorRepository.findOneBy({ id_consultor });
  }
  findConsultorByIdUser(id_user: number): Promise<Consultor> {
    return this.consultorRepository.findOne({ where: { id_usuario: id_user } });
  }

  /**
   * pasas un id por parametro y podras modificar la intervencion de dicho id
   */
  updateConsultor(
    id_consultor: number,
    ConsultorDto: consultorDto,
  ): Promise<Consultor> {
    const consultor: Consultor = new Consultor();
    consultor.id_consultor = id_consultor;
    consultor.nombre_consultor = ConsultorDto.nombre_consultor;
    consultor.id_usuario = ConsultorDto.id_usuario;
    return this.consultorRepository.save(consultor);
  }

  /**
 * eliminar la intervencion del id que pases
 *
removeIntervencion(id: number): Promise<{ affected?: number }> {
  return this.intervencionRepository.delete(id); 

}*/

  async deleteConsultor(id_consultor: number) {
    return this.consultorRepository.delete(id_consultor);
  }
}
