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
import { IntervencionDto } from './dto/intervencion.dto';
import { IntervencionService } from './Intervencion.service';

@Controller('intervencion')
export class IntervencionController {
  constructor(private readonly IntervencionService: IntervencionService) {}

  @Post()
  create(@Body() IntervencionDto: IntervencionDto) {
    return this.IntervencionService.createIntervencion(IntervencionDto);
  }

  @Get()
  findAll() {
    return this.IntervencionService.findAllIntervencion();
  }

  @Get(':id')
  findOneById(@Param('idIntervencion', ParseIntPipe) idIntervencion: number) {
    return this.IntervencionService.findIntervencionById(+idIntervencion);
  }

  @Patch(':idIntervencion')
  update(
    @Param('idIntervencion', ParseIntPipe) idIntervencion: number,
    @Body() updateIntervencionDto: IntervencionDto,
  ) {
    return this.IntervencionService.updateIntervencion(
      +idIntervencion,
      updateIntervencionDto,
    );
  }

  @Delete(':idIntervencion')
  delete(@Param('idIntervencion', ParseIntPipe) idIntervencion: number) {
    return this.IntervencionService.delete(idIntervencion);
  }

  /* filter( interventionDTO: any){
       console.log(interventionDTO);
     return this.IntervencionService.filterAux(interventionDTO);  
   } 
*/
}
