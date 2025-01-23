import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Notificacion } from '../notificacion.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { NotificacionDto } from '../dto/notificacion.dto';
import { ConsultorService } from 'src/consultor/consultor.service';

@Injectable()
export class NotificacionService {
  constructor(
    @InjectRepository(Notificacion)
    private readonly repositoryNotification: Repository<Notificacion>,
    private readonly consultorService: ConsultorService,
  ) {}

  async updateNotificacion(notificacion: NotificacionDto, id: number) {
    // Usar preload para cargar la notificación existente
    const notification = await this.repositoryNotification.preload({
      id: id,
      ...notificacion, // Asumiendo que notificacion contiene los campos a actualizar
    });

    // Verificar si la notificación fue encontrada
    if (!notification) {
      return new BadRequestException('Notificacion no existe');
    }

    // Guardar la notificación actualizada en la base de datos
    return await this.repositoryNotification.save(notification);
  }

  async getNotificacion(id: number) {
    const notifications = await this.repositoryNotification.find({
      loadRelationIds: true,
      where: { consultor: { id_consultor: id } },
    });
    return notifications;
  }

  async clearAll(id_consultor: number) {
    console.log(id_consultor);
    const notifications = await this.repositoryNotification.find({
      loadRelationIds: true,
      where: { consultor: { id_consultor: id_consultor } },
    });
    console.log(notifications);

    if (notifications.length > 0) {
      try {
        await this.repositoryNotification.remove(notifications);
        console.log(`Se eliminaron ${notifications.length} notificaciones.`);
      } catch (error) {
        console.error('Error al eliminar notificaciones:', error);
        throw new BadRequestException('Error al eliminar notificaciones');
      }
    }
  }
  async deleteNotificacion(id_notificacion: number) {
    console.log(id_notificacion);

    const notification = await this.repositoryNotification.findOne({
      where: { id: id_notificacion },
    });

    if (notification) {
      console.log(notification);
      await this.repositoryNotification.delete(id_notificacion);
    } else return new BadRequestException('Notificación no existe');
  }
  async createNotificacion(
    notificacionData: NotificacionDto,
    idConsultor: number,
  ) {
    const notificacion = this.repositoryNotification.create(notificacionData);
    notificacion.consultor = await this.consultorService.findConsultorById(
      idConsultor,
    );
    return await this.repositoryNotification.save(notificacion);
  }
}
