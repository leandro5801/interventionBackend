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
import { trabajadorDto } from './dto/trabajador.dto';
import { TrabajadorService } from './trabajador.service';

@Controller('trabajador')
export class TrabajadorController {
  constructor(private readonly TrabajadorService: TrabajadorService) {}

  @Post()
  createTrabajador(@Body() TrabajadorDto: trabajadorDto) {
    return this.TrabajadorService.createTrabajador(TrabajadorDto);
  }

  @Get()
  findAll() {
    return this.TrabajadorService.findAllTrabajador();
  }

  /*@Get(':idCliente')
     findOneById(@Param('idCliente', ParseIntPipe) idCliente: number) {
       return this.ClienteService.findClienteById(+idCliente);
     }*/

  @Patch(':idTrabajador')
  update(
    @Param('idTrabajador', ParseIntPipe) idTrabajador: number,
    @Body() updateTrabajadorDto: trabajadorDto,
  ) {
    return this.TrabajadorService.updateTrabajador(
      +idTrabajador,
      updateTrabajadorDto,
    );
  }

  @Delete(':idTrabajador')
  deleteTrabajador(@Param('idTrabajador', ParseIntPipe) idTrabajador: number) {
    return this.TrabajadorService.deleteTrabajador(idTrabajador);
  }

  /* filter( interventionDTO: any){
         console.log(interventionDTO);
       return this.IntervencionService.filterAux(interventionDTO);  
     } 
  */
}
