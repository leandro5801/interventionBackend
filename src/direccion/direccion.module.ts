import { Module } from '@nestjs/common';
import { DireccionController } from './direccion.controller';
import { DireccionService } from './direccion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Direccion } from './direccion.entity';
import { UebModule } from 'src/ueb/ueb.module';

@Module({
  imports: [TypeOrmModule.forFeature([Direccion]), UebModule],
  exports: [DireccionService],
  controllers: [DireccionController],
  providers: [DireccionService],
})
export class DireccionModule {}
