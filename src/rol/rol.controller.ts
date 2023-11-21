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
import { RolDto } from './dto/rol.dto';
import { RolService } from './rol.service';

@Controller('rol')
export class RolController {
  constructor(private readonly RolService: RolService) {}

  @Post()
  create(@Body() rolDto: RolDto) {
    return this.RolService.createRol(rolDto);
  }

  @Get()
  findAll() {
    return this.RolService.findAllRol();
  }

  @Get(':id')
  findOneById(@Param('id_rol', ParseIntPipe) id_rol: number) {
    return this.RolService.findRolById(+id_rol);
  }

  @Patch(':id_rol')
  update(
    @Param('id_rol', ParseIntPipe) idRol: number,
    @Body() updateRolDto: RolDto,
  ) {
    return this.RolService.updateRol(+idRol, updateRolDto);
  }

  @Delete(':id_rol')
  delete(@Param('id_rol', ParseIntPipe) id_rol: number) {
    return this.RolService.delete(id_rol);
  }

  /* filter( interventionDTO: any){
         console.log(interventionDTO);
       return this.RolService.filterAux(interventionDTO);  
     } 
  */
}
