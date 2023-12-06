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
import { direccionDto } from './dto/direccion.dto';
import { DireccionService } from './direccion.service';

@Controller('direccion')
export class DireccionController {
  constructor(private readonly DireccionService: DireccionService) {}

  @Post()
  createDireccion(@Body() DireccionDto: direccionDto) {
    return this.DireccionService.createDireccion(DireccionDto);
  }

  @Get()
  findAll() {
    return this.DireccionService.findAllDireccion();
  }

  /*@Get(':idCliente')
     findOneById(@Param('idCliente', ParseIntPipe) idCliente: number) {
       return this.ClienteService.findClienteById(+idCliente);
     }*/

  @Patch(':idDireccion')
  update(
    @Param('idDireccion', ParseIntPipe) idDireccion: number,
    @Body() updateDireccionDto: direccionDto,
  ) {
    return this.DireccionService.updateDireccion(
      +idDireccion,
      updateDireccionDto,
    );
  }

  @Delete(':idDireccion')
  deleteCliente(@Param('idDireccion', ParseIntPipe) idDireccion: number) {
    return this.DireccionService.deleteDireccion(idDireccion);
  }

  /* filter( interventionDTO: any){
         console.log(interventionDTO);
       return this.IntervencionService.filterAux(interventionDTO);  
     } 
  */
  @Get('/direccion')
  getDireccion(nombreEmpresa: string, nombreUeb: string) {
    return this.DireccionService.fetchDireccionFromApi(
      nombreEmpresa,
      nombreUeb,
    );
  }
}
