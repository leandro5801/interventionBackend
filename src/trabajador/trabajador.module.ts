import { Module } from '@nestjs/common';
import { TrabajadorController } from './trabajador.controller';
import { TrabajadorService } from './trabajador.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trabajador } from './trabajador.entity';
import { AreaModule } from 'src/area/area.module';

@Module({
  imports: [TypeOrmModule.forFeature([Trabajador]), AreaModule],
  controllers: [TrabajadorController],
  providers: [TrabajadorService],
})
export class TrabajadorModule {}
