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
import { consultorDto } from './dto/consultor.dto';
import { ConsultorService } from './consultor.service';

@Controller('consultor')
export class ConsultorController {
  constructor(private readonly ConsultorService: ConsultorService) {}

  @Post()
  createConsultor(@Body() ConsultorDto: consultorDto) {
    return this.ConsultorService.createConsultor(ConsultorDto);
  }

  @Get()
  findAll() {
    return this.ConsultorService.findAllConsultor();
  }

  /*@Get(':idConsultor')
     findOneById(@Param('idConsultor', ParseIntPipe) idConsultor: number) {
       return this.ConsultorService.findConsultorById(+idConsultor);
     }*/

  @Patch(':idConsultor')
  update(
    @Param('idConsultor', ParseIntPipe) idConsultor: number,
    @Body() updateConsultorDto: consultorDto,
  ) {
    return this.ConsultorService.updateConsultor(
      +idConsultor,
      updateConsultorDto,
    );
  }

  @Delete(':idConsultor')
  deleteConsultor(@Param('idConsultor', ParseIntPipe) idConsultor: number) {
    return this.ConsultorService.deleteConsultor(idConsultor);
  }

  /* filter( interventionDTO: any){
         console.log(interventionDTO);
       return this.IntervencionService.filterAux(interventionDTO);  
     } 
  */
}
