import { Module } from '@nestjs/common';
import { ClasificacionController } from './clasificacion.controller';
import { ClasificacionService } from './clasificacion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clasificacion } from './clasificacion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clasificacion])],
  controllers: [ClasificacionController],
  providers: [ClasificacionService],
})
export class ClasificacionModule {}
