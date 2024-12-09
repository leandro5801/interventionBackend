import { Injectable } from '@nestjs/common';
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
    console.log(Tema);

    const { id, isDark, font } = Tema;
    const tema = await this.sessionRepository.findOne({
      where: { id: id },
    });
    console.log();

    tema.isDark = isDark;
    tema.font = font;
    console.log(tema);

    this.sessionRepository.save(tema);
  }

  async getTema(id: number) {
    return await this.sessionRepository.findOneBy({ id: id });
  }
  async crearTema(Tema: SessionDto) {
    const newTema = this.sessionRepository.create(Tema);
    return this.sessionRepository.save(newTema);
  }
  async eliminarTema(id: number) {
    return await this.sessionRepository.delete({ id: id });
  }
}
