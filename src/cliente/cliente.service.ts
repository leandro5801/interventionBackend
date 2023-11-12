import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './cliente.entity';
import { Repository } from 'typeorm';
import { clienteDto } from './dto/cliente.dto';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(Cliente)
    private readonly clienteRepository: Repository<Cliente>,
  ) {}

  async createCliente(createCliente: clienteDto) {
    const cliente = this.clienteRepository.create(createCliente);
    await this.clienteRepository.save(cliente);
    return cliente;
  }
  /**
   *retorna un arreglo de todas las intervenciones
   */
  findAllCliente(): Promise<Cliente[]> {
    return this.clienteRepository.find();
  }

  /**
   * se pasa un id por parametro y esta funcion devuelve la intervencion con el id
   */
  findClientenById(idCliente: number): Promise<Cliente> {
    return this.clienteRepository.findOneBy({ idCliente });
  }

  /**
   * pasas un id por parametro y podras modificar la intervencion de dicho id
   */
  updateCliente(idCliente: number, ClienteDto: clienteDto): Promise<Cliente> {
    const cliente: Cliente = new Cliente();
    cliente.idCliente = ClienteDto.idCliente;
    cliente.nombreCliente = ClienteDto.nombreCliente;
    return this.clienteRepository.save(cliente);
  }

  /**
 * eliminar la intervencion del id que pases
 *
removeIntervencion(id: number): Promise<{ affected?: number }> {
  return this.intervencionRepository.delete(id); 

}*/

  async deleteCliente(idCliente: number) {
    return this.clienteRepository.delete(idCliente);
  }
}
