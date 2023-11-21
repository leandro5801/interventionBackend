import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Rol } from './rol.entity';
import { Repository } from 'typeorm';
import { RolDto } from './dto/rol.dto';

@Injectable()
export class RolService {
  constructor(
    @InjectRepository(Rol)
    private readonly rolRepository: Repository<Rol>,
  ) {}

  async createRol(createRol: RolDto) {
    const rol = this.rolRepository.create(createRol);
    await this.rolRepository.save(rol);
    return rol;
  }
  /**
   *retorna un arreglo de todas las Roles
   */
  findAllRol(): Promise<Rol[]> {
    return this.rolRepository.find();
  }

  /**
   * se pasa un id por parametro y esta funcion devuelve la Rol con el id
   */
  findRolById(id_rol: number): Promise<Rol> {
    return this.rolRepository.findOneBy({ id_rol });
  }

  /**
   * pasas un id por parametro y podras modificar la Rol de dicho id
   */
  async updateRol(id_rol: number, RolDto: RolDto) {
    await this.rolRepository.update(id_rol, RolDto);
  }

  /**
   * pasas un id por parametro y podras eliminar la Rol de dicho id
   */
  async delete(id_rol: number) {
    return this.rolRepository.delete(id_rol);
  }
}
