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
import { areaDto } from './dto/area.dto';
import { AreaService } from './area.service';

@Controller('area')
export class AreaController {
  constructor(private readonly AreaService: AreaService) {}

  @Post()
  createArea(@Body() AreaDto: areaDto) {
    return this.AreaService.createArea(AreaDto);
  }

  @Get()
  findAll() {
    return this.AreaService.findAllArea();
  }

  /*@Get(':idCliente')
     findOneById(@Param('idCliente', ParseIntPipe) idCliente: number) {
       return this.ClienteService.findClienteById(+idCliente);
     }*/

  @Patch(':idArea')
  update(
    @Param('idArea', ParseIntPipe) idArea: number,
    @Body() updateAreaDto: areaDto,
  ) {
    return this.AreaService.updateArea(+idArea, updateAreaDto);
  }

  @Delete(':idArea')
  deleteArea(@Param('idArea', ParseIntPipe) idArea: number) {
    return this.AreaService.deleteArea(idArea);
  }

  /* filter( interventionDTO: any){
         console.log(interventionDTO);
       return this.IntervencionService.filterAux(interventionDTO);  
     } 
  */
}
