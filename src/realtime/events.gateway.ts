import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Logger } from "@nestjs/common";
import { Server } from "socket.io";

@WebSocketGateway({ cors: { origin: "*" } })
export class EventsGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server!: Server;

  private logger: Logger = new Logger("EventsGateway");

  afterInit(server: Server) {
    this.logger.log("EventsGateway initialized");
  }

  handleConnection(client: any, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: any) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }

  emit(event: string, payload: any) {
    if (this.server) {
      this.logger.log(`Emitting event: ${event}`);
      this.server.emit(event, payload);
    }
  }
}
