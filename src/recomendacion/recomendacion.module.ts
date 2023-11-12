import { Module } from '@nestjs/common';
import { recomendacionController } from './recomendacion.controller';
import { recomendacionService } from './recomendacion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recomendacion } from './recomendacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recomendacion])],
  controllers: [recomendacionController],
  providers: [recomendacionService],
})
export class recomendacionModule {}
