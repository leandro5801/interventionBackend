import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Recomendacion } from './recomendacion.entity';
import { Repository } from 'typeorm';
import { recomendacionDto } from './dto/recomendacion.dto';

@Injectable()
export class recomendacionService {
  constructor(
    @InjectRepository(Recomendacion)
    private readonly recomendacionRepository: Repository<Recomendacion>,
  ) {}
  async createRecom(createRecomDto: recomendacionDto) {
    const recomendacion = this.recomendacionRepository.create(createRecomDto);
    await this.recomendacionRepository.save(recomendacion);
    return recomendacion;
  }

  async findAllRecom() {
    return await this.recomendacionRepository.find();
  }

  async findOneRecom(idRecom: number) {
    const found = await this.recomendacionRepository.findOne({
      where: { idRecom },
    });
    if (!found) {
      throw new NotFoundException(`Context with id ${idRecom} not found`);
    }
    return found;
  }

  async updateRecom(idRecom: number, createRecomDto: recomendacionDto) {
    if (await this.findOneRecom(idRecom)) {
      await this.recomendacionRepository.update(idRecom, createRecomDto);
      const RecomUpdate = await this.findOneRecom(idRecom);
      return RecomUpdate;
    }
  }

  async removeRecom(idRecom: number) {
    const deleteRecom = await this.recomendacionRepository.delete(idRecom);
    if (!deleteRecom.affected) {
      throw new NotFoundException(`Context with id ${idRecom} not found`);
    }
  }
}
