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
import { proyectoDto } from './dto/proyecto.dto';
import { ProyectoService } from './proyecto.service';

@Controller('proyecto')
export class ProyectoController {
  constructor(private readonly ProyectoService: ProyectoService) {}

  @Post()
  createProyecto(@Body() ProyectoDto: proyectoDto) {
    return this.ProyectoService.createProyecto(ProyectoDto);
  }

  @Get()
  findAll() {
    return this.ProyectoService.findAllProyecto();
  }

  // @Get(':idCliente')
  //findOneById(@Param('idCliente', ParseIntPipe) idCliente: number) {
  //return this.ProyectoService.findClienteById(+idCliente);
  //}

  @Patch(':id_proyecto')
  update(
    @Param('id_proyecto', ParseIntPipe) id_proyecto: number,
    @Body() updateProyectoDto: proyectoDto,
  ) {
    return this.ProyectoService.updateProyecto(+id_proyecto, updateProyectoDto);
  }

  @Delete(':id_proyecto')
  deleteProyecto(@Param('id_proyecto', ParseIntPipe) id_proyecto: number) {
    return this.ProyectoService.deleteProyecto(id_proyecto);
  }

  /* filter( interventionDTO: any){
         console.log(interventionDTO);
       return this.IntervencionService.filterAux(interventionDTO);  
     } 
  */
}
