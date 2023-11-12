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
import { empresaDto } from './dto/empresa.dto';
import { EmpresaService } from './empresa.service';

@Controller('empresa')
export class EmpresaController {
  constructor(private readonly EmpresaService: EmpresaService) {}

  @Post()
  createEmpresa(@Body() EmpresaDto: empresaDto) {
    return this.EmpresaService.createEmpresa(EmpresaDto);
  }

  @Get()
  findAll() {
    return this.EmpresaService.findAllEmpresa();
  }

  /*@Get(':idCliente')
     findOneById(@Param('idCliente', ParseIntPipe) idCliente: number) {
       return this.ClienteService.findClienteById(+idCliente);
     }*/

  @Patch(':idEmpresa')
  update(
    @Param('idEmpresa', ParseIntPipe) idEmpresa: number,
    @Body() updateEmpresaDto: empresaDto,
  ) {
    return this.EmpresaService.updateEmpresa(+idEmpresa, updateEmpresaDto);
  }

  @Delete(':idEmpresa')
  deleteEmpresa(@Param('idEmpresa', ParseIntPipe) idEmpresa: number) {
    return this.EmpresaService.deleteEmpresa(idEmpresa);
  }

  /* filter( interventionDTO: any){
         console.log(interventionDTO);
       return this.IntervencionService.filterAux(interventionDTO);  
     } 
  */
}
