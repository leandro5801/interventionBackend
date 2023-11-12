import { Module } from '@nestjs/common';
import { DireccionController } from './direccion.controller';
import { DireccionService } from './direccion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Direccion } from './direccion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Direccion])],
  controllers: [DireccionController],
  providers: [DireccionService],
})
export class DireccionModule {}
