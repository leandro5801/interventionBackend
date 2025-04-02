import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { NotificacionService } from './notificacion.service';
import { NotificacionDto } from '../dto/notificacion.dto';

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
  @Patch('/:id')
  updateNotificacion(
    @Body() notificacion: NotificacionDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.notificacionService.updateNotificacion(notificacion, id);
  }

  @Get('/consultor/:id_consultor/read')
  markAllAsRead(@Param('id_consultor') id: number) {
    return this.notificacionService.markAllAsRead(+id);
  }
}
