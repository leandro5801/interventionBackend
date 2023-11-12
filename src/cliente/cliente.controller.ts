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
import { clienteDto } from './dto/cliente.dto';
import { ClienteService } from './cliente.service';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly ClienteService: ClienteService) {}

  @Post()
  createCliente(@Body() ClienteDto: clienteDto) {
    return this.ClienteService.createCliente(ClienteDto);
  }

  @Get()
  findAll() {
    return this.ClienteService.findAllCliente();
  }

  /*@Get(':idCliente')
     findOneById(@Param('idCliente', ParseIntPipe) idCliente: number) {
       return this.ClienteService.findClienteById(+idCliente);
     }*/

  @Patch(':idCliente')
  update(
    @Param('idCliente', ParseIntPipe) idCliente: number,
    @Body() updateClienteDto: clienteDto,
  ) {
    return this.ClienteService.updateCliente(+idCliente, updateClienteDto);
  }

  @Delete(':idCliente')
  deleteCliente(@Param('idCliente', ParseIntPipe) idCliente: number) {
    return this.ClienteService.deleteCliente(idCliente);
  }

  /* filter( interventionDTO: any){
         console.log(interventionDTO);
       return this.IntervencionService.filterAux(interventionDTO);  
     } 
  */
}
