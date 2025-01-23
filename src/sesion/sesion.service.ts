import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Session } from './sesion.entity';
import { Repository } from 'typeorm';
import { SessionDto } from './dto/sesion.dto';

@Injectable()
export class SessionServices {
  constructor(
    @InjectRepository(Session)
    private readonly sessionRepository: Repository<Session>,
  ) {}

  async cambiarTema(Tema: SessionDto) {
    const { id, isDark, font } = Tema;
    const tema = await this.sessionRepository.findOne({
      where: { id: id },
    });
    if (!tema) {
      throw new NotFoundException(`Session dont exist`); // Lanza un error si el tema no existe
    }
    tema.isDark = isDark;
    tema.font = font;
    this.sessionRepository.save(tema);
  }

  async getTema(id: number) {
    const tema = await this.sessionRepository.findOneBy({ id: id });
    if (!tema) {
      return new NotFoundException(`Session dont exist`); // Lanza un error si el tema no exist
    }
    return tema;
  }
  async crearTema(Tema: SessionDto) {
    const newTema = this.sessionRepository.create(Tema);
    console.log(newTema);

    return this.sessionRepository.save(newTema);
  }
  async eliminarTema(id: number) {
    const tema = await this.getTema(id);
    return (await this.sessionRepository.delete({ id: id })).affected > 0;
  }
  async eliminarTemaByUser(id_usuario: number) {
    return (
      (await this.sessionRepository.delete({ id_usuario: id_usuario }))
        .affected > 0
    );
  }
}
