import { Controller, Delete, Get, Param } from '@nestjs/common';
import { NotificacionService } from './notificacion.service';

@Controller('notificacion')
export class NotificacionController {
  constructor(private readonly notificacionService: NotificacionService) {}

  @Get('/:id')
  GetNotificacion(@Param('id') id: number) {
    return this.notificacionService.getNotificacion(+id);
  }
  @Delete('/:id_notificacion')
  deleteNotificacion(@Param('id_notificacion') id: number) {
    return this.notificacionService.deleteNotificacion(+id);
  }
  @Delete('/consultor/:id_consultor')
  clearNotificaciones(@Param('id_consultor') id: number) {
    return this.notificacionService.clearAll(+id);
  }
}
