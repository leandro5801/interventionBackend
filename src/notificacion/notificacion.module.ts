import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notificacion } from './notificacion.entity';
import { NotificacionController } from './controller/notificacion.controller';
import { NotificacionService } from './controller/notificacion.service';
import { NotificacionGateway } from './gateway/notificacion.gateway';

@Module({
  imports: [TypeOrmModule.forFeature([Notificacion])],
  controllers: [NotificacionController],
  providers: [NotificacionService, NotificacionGateway],
  exports: [NotificacionService, NotificacionGateway],
})
export class NotificacionModule {}
