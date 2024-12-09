import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { SessionServices } from './sesion.service';
import { SessionDto } from './dto/sesion.dto';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionServices: SessionServices) {}
  @Post('')
  crearTema(@Body() Tema: SessionDto) {
    return this.sessionServices.crearTema(Tema);
  }
  @Patch('')
  cambiarTema(@Body() Tema: SessionDto) {
    return this.sessionServices.cambiarTema(Tema);
  }
  @Delete('')
  eliminarTema(@Body() id: number) {
    return this.sessionServices.eliminarTema(id);
  }
  @Get('/:id')
  getTema(@Param('id') id: number) {
    return this.sessionServices.getTema(+id);
  }
}
