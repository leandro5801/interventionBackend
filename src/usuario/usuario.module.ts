import { Rol } from './../rol/rol.entity';
import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { SessionModule } from 'src/sesion/sesion.module';
import { SessionServices } from 'src/sesion/sesion.service';
import { Session } from 'src/sesion/sesion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, Rol, Session]),SessionModule],
  controllers: [UsuarioController],
  providers: [UsuarioService, SessionServices],
  exports: [UsuarioService],
})
export class UsuarioModule {}
