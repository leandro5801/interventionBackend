import {
  Controller,
  ParseIntPipe,
  Post,
  Body,
  Get,
  Patch,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { usuarioDto } from './dto/usuario.dto';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly UsuarioService: UsuarioService) {}

  @Post()
  createUsuario(@Body() UsuarioDto: usuarioDto) {
    return this.UsuarioService.createUsuario(UsuarioDto);
  }

  @Get()
  findAll() {
    return this.UsuarioService.findAllUsuario();
  }

  /*@Get(':idUsuario')
     findOneById(@Param('idUsuario', ParseIntPipe) idUsuario: number) {
       return this.UsuarioService.findUsuarioById(+idUsuario);
     }*/

  @Patch(':idUsuario')
  update(
    @Param('idUsuario', ParseIntPipe) idUsuario: number,
    @Body() updateUsuarioDto: usuarioDto,
  ) {
    return this.UsuarioService.updateUsuario(+idUsuario, updateUsuarioDto);
  }

  @Delete(':idUsuario')
  deleteUsuario(@Param('idUsuario', ParseIntPipe) idUsuario: number) {
    return this.UsuarioService.deleteUsuario(idUsuario);
  }

  /* filter( interventionDTO: any){
         console.log(interventionDTO);
       return this.IntervencionService.filterAux(interventionDTO);  
     } 
  */
}
