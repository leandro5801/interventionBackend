import { AutenticacionService } from './autenticacion.service';
import { AutenticacionGuard } from './autenticacion.guard';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

@Controller('autenticacion')
export class AutenticacionController {
  constructor(private autenticacionService: AutenticacionService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.autenticacionService.signIn(
      signInDto.nombre_usuario,
      signInDto.contraseña,
    );
  }

  @UseGuards(AutenticacionGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.usuario;
  }

  @Post('verify')
  async verifyToken(@Body('access_token') access_token: string) {
    return this.autenticacionService.verifyToken(access_token);
  }
}
