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

  @Patch(':id_consultor')
  update(
    @Param('id_consultor', ParseIntPipe) id_consultor: number,
    @Body() updateConsultorDto: consultorDto,
  ) {
    return this.ConsultorService.updateConsultor(
      +id_consultor,
      updateConsultorDto,
    );
  }

  @Delete(':id_consultor')
  deleteConsultor(@Param('id_consultor', ParseIntPipe) id_consultor: number) {
    return this.ConsultorService.deleteConsultor(id_consultor);
  }

  /* filter( interventionDTO: any){
           console.log(interventionDTO);
         return this.IntervencionService.filterAux(interventionDTO);  
       } 
    */
}
