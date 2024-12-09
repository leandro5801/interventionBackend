import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Notificacion } from '../notificacion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { NotificacionDto } from '../dto/notificacion.dto';

@Injectable()
export class NotificacionService {
  constructor(
    @InjectRepository(Notificacion)
    private readonly repositoryNotification: Repository<Notificacion>,
  ) {}

  async getNotificacion(id: number) {
    const notifications = await this.repositoryNotification.find({
      loadRelationIds: true,
      where: { consultor: { id_consultor: id } },
    });
    return notifications;
  }

  async clearAll(id_consultor: number) {
    const notifications = await this.repositoryNotification.find({
      loadRelationIds: true,
      where: { consultor: { id_consultor: id_consultor } },
    });
    if (notifications) await this.repositoryNotification.remove(notifications);
  }
  async deleteNotificacion(id_notificacion: number) {
    const notification = await this.repositoryNotification.findOne({
      where: { id: id_notificacion },
    });
    if (notification) {
      await this.repositoryNotification.delete(notification);
    } else return new BadRequestException('Notificación no existe');
  }
  async createNotificacion(notificacionData: NotificacionDto) {
    const notificacion = this.repositoryNotification.create(notificacionData);
    return await this.repositoryNotification.save(notificacion);
  }
}
