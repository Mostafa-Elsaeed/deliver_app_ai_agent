import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } })
export class EventsGateway {
  @WebSocketServer()
  server!: Server;

  emit(event: string, payload: any) {
    if (this.server) {
      this.server.emit(event, payload);
    }
  }
}
