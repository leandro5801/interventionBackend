import { Module } from '@nestjs/common';
import { ProyectoController } from './proyecto.controller';
import { ProyectoService } from './proyecto.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proyecto } from './proyecto.entity';
import { NotificacionModule } from 'src/notificacion/notificacion.module';

@Module({
  imports: [TypeOrmModule.forFeature([Proyecto]), NotificacionModule],
  controllers: [ProyectoController],
  providers: [ProyectoService],
})
export class ProyectoModule {}
