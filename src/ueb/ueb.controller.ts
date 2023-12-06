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
import { uebDto } from './dto/ueb.dto';
import { UebService } from './ueb.service';

@Controller('ueb')
export class UebController {
  constructor(private readonly UebService: UebService) {}

  @Post()
  createUeb(@Body() UebDto: uebDto) {
    return this.UebService.createUeb(UebDto);
  }

  @Get()
  findAll() {
    return this.UebService.findAllUeb();
  }

  /*@Get(':idCliente')
     findOneById(@Param('idCliente', ParseIntPipe) idCliente: number) {
       return this.ClienteService.findClienteById(+idCliente);
     }*/

  @Patch(':idUeb')
  update(
    @Param('idUeb', ParseIntPipe) idUeb: number,
    @Body() updateUebDto: uebDto,
  ) {
    return this.UebService.updateUeb(+idUeb, updateUebDto);
  }

  @Delete(':idUeb')
  deleteArea(@Param('idUeb', ParseIntPipe) idUeb: number) {
    return this.UebService.deleteUeb(idUeb);
  }
  @Get('/ueb')
  fetchDataFromApi(idEmpresa: number, nombreEmpresa: string) {
    return this.UebService.fetchUebFromApi(idEmpresa, nombreEmpresa);
  }
  /* filter( interventionDTO: any){
         console.log(interventionDTO);
       return this.IntervencionService.filterAux(interventionDTO);  
     } 
  */
}
