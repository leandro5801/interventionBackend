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
import { ClasificacionDto } from './dto/clasificacion.dto';
import { ClasificacionService } from './clasificacion.service';

@Controller('clasificacion')
export class ClasificacionController {
  constructor(private readonly ClasificacionService: ClasificacionService) {}

  @Post()
  create(@Body() clasificacionDto: ClasificacionDto) {
    return this.ClasificacionService.createClasificacion(clasificacionDto);
  }

  @Get()
  findAll() {
    return this.ClasificacionService.findAllClasificacion();
  }

  @Get(':id')
  findOneById(
    @Param('id_clasificacion', ParseIntPipe) id_clasificacion: number,
  ) {
    return this.ClasificacionService.findClasificacionById(+id_clasificacion);
  }

  @Patch(':id_clasificacion')
  update(
    @Param('id_clasificacion', ParseIntPipe) id_clasificacion: number,
    @Body() updateClasificacionDto: ClasificacionDto,
  ) {
    return this.ClasificacionService.updateClasificacion(
      +id_clasificacion,
      updateClasificacionDto,
    );
  }

  @Delete(':id_clasificacion')
  delete(@Param('id_clasificacion', ParseIntPipe) id_clasificacion: number) {
    return this.ClasificacionService.delete(id_clasificacion);
  }

  /* filter( interventionDTO: any){
         console.log(interventionDTO);
       return this.ClasificacionService.filterAux(interventionDTO);  
     } 
  */
}
