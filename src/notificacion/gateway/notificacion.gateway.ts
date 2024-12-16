import { Controller } from '@nestjs/common';
import { NotificacionService } from '../controller/notificacion.service';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { NotificacionGatewayService } from './notificacion.gateway.service';
import { NotificacionDto } from '../dto/notificacion.dto';

@WebSocketGateway({ cors: true })
export class NotificacionGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  constructor(private readonly notificationServices: NotificacionService) {}

  private clients: Map<string, any> = new Map();

  handleConnection(client: any) {
    const consultorId = client.handshake.query.consultorId; // Obtener el ID del consultor
    console.log(consultorId);

    this.clients.set(consultorId, client);
  }

  handleDisconnect(client: any) {
    this.clients.forEach((value, key) => {
      if (value.id === client.id) {
        this.clients.delete(key);
      }
    });
  }
  sendNotificationToConsultor(
    consultorId: number,
    notificacion: NotificacionDto,
  ) {
    const client = this.clients.get(String(consultorId));
    if (client) {
      client.emit('notification', notificacion);
    }
  }
}
