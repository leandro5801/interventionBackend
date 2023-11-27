import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { Repository } from 'typeorm';
import { usuarioDto } from './dto/usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async createUsuario(createUsuario: usuarioDto) {
    const usuario = this.usuarioRepository.create(createUsuario);
    await this.usuarioRepository.save(usuario);
    return usuario;
  }
  /**
   *retorna un arreglo de todas las intervenciones
   */
  findAllUsuario(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  /**
   * se pasa un id por parametro y esta funcion devuelve la intervencion con el id
   */
  findUsuarionById(id_usuario: number): Promise<Usuario> {
    return this.usuarioRepository.findOneBy({ id_usuario });
  }

  /**
   * se pasa un nombre por parametro y esta funcion devuelve la intervencion con el id
   */
  findUsuarioByNombre(nombre_usuario: string): Promise<Usuario> {
    return this.usuarioRepository.findOneBy({ nombre_usuario });
  }

  /**
   * pasas un id por parametro y podras modificar la intervencion de dicho id
   */
  updateUsuario(id_usuario: number, UsuarioDto: usuarioDto): Promise<Usuario> {
    const usuario: Usuario = new Usuario();
    usuario.id_usuario = id_usuario;
    usuario.nombre_usuario = UsuarioDto.nombre_usuario;
    usuario.contraseña = UsuarioDto.contraseña;
    usuario.id_rol = UsuarioDto.id_rol;
    return this.usuarioRepository.save(usuario);
  }

  /**
 * eliminar la intervencion del id que pases
 *
removeIntervencion(id: number): Promise<{ affected?: number }> {
  return this.intervencionRepository.delete(id); 

}*/

  async deleteUsuario(id_usuario: number) {
    return this.usuarioRepository.delete(id_usuario);
  }

  /*async filterAux(intervention: any): Promise<Intervencion[]>{
  if (Intervencion.startDate){
  if(IntervencionDto.endDate){
   return await this.intervencionRepository.find(
     {IntervencionDto,
       startDate:{
         $gte: intervencionDto.startDate,
         $lt: IntervencionDto.endDate
       },
       endDate:{
         $gte: IntervencionDto.startDate,
         $lt: IntervencionDto.endDate
       }
     })
     console.log(interventionDTO.endDate);
   }

     else{
   return await this.intervencionRepository.find(
     {IntervencionDto,
       startDate:{
         $gte: intervencionDto.startDate,
      //   $lt: ""
       },
       endDate:{
         $gte: intervencionDto.startDate,
       //  $lt: ""
       }
     })}
  }

  else{
   return await this.intervencionRepository.find(interventionDTO);}
 }*/

  /*

  async update(id: string, createdIntervencionDto: IntervencionDTO) {
    if (await this.findOne(id)) {
      await this.intervencionRepository.update(id, createIntervenDto);
      const intervenUpdate = await this.findOne(id);
      return intervenUpdate;
    }
  }

  async remove(id: number) {
    const deleteInterven = await this.intervencionRepository.delete(id);
    if (!deleteInterven.affected) {
      throw new NotFoundException(`Context with id ${id} not found`);
    }
  }*/
}
