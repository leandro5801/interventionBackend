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

  async findOneRecom(id_recomendacion: number) {
    return this.recomendacionRepository.findOneBy({ id_recomendacion });
  }

  async updateRecom(
    id_recomendacion: number,
    createRecomDto: recomendacionDto,
  ) {
    await this.recomendacionRepository.update(id_recomendacion, createRecomDto);
    const RecomUpdate = await this.findOneRecom(id_recomendacion);
    return RecomUpdate;
  }

  async removeRecom(id_recomendacion: number) {
    const deleteRecom = await this.recomendacionRepository.delete(
      id_recomendacion,
    );
    if (!deleteRecom.affected) {
      throw new NotFoundException(
        `Context with id ${id_recomendacion} not found`,
      );
    }
  }
}
