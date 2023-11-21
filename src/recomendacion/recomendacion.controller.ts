import {
  Controller,
  ParseIntPipe,
  Post,
  Body,
  Get,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { recomendacionDto } from './dto/recomendacion.dto';
import { recomendacionService } from './recomendacion.service';

@Controller('recomendacion')
export class recomendacionController {
  constructor(private recomendacionService: recomendacionService) {}

  @Post()
  async createRecom(@Body() createRecomDto: recomendacionDto) {
    return this.recomendacionService.createRecom(createRecomDto);
  }

  @Get()
  async findAllRecom() {
    return this.recomendacionService.findAllRecom();
  }

  @Get(':id')
  async findOneRecom(@Param('id', ParseIntPipe) id: number) {
    return this.recomendacionService.findOneRecom(id);
  }

  @Put(':idRecom')
  async updateRecom(
    @Param('idRecom', ParseIntPipe) idRecom: number,
    @Body() createRecomDto: recomendacionDto,
  ) {
    return this.recomendacionService.updateRecom(idRecom, createRecomDto);
  }

  @Delete(':idRecom')
  async removeRecom(@Param('idRecom', ParseIntPipe) idRecom: number) {
    return this.recomendacionService.removeRecom(idRecom);
  }
}

/*

  @Controller()
export class TaskController {
    constructor(private readonly taskService: TaskService){}
    @MessagePattern(TaskMSG.CREATE)
    create(@Payload() taskDTO: TaskDTO){
      return this.taskService.create(taskDTO);  
    } 
    @MessagePattern(TaskMSG.FIND_ALL)
    findAll(){
        return this.taskService.findAll();
    }
    @MessagePattern(TaskMSG.FIND_ONE)
    findOne(@Payload()id:string){
        return this.taskService.findOne(id);
    }
    @MessagePattern(TaskMSG.UPDATE)
    update(@Payload() payload:any){
        return this.taskService.update(payload.id,payload.taskDTO);

    }
    @MessagePattern(TaskMSG.DELETE)
    delete(@Payload() id:string){
        return this.taskService.delete(id);

    }
    @MessagePattern(TaskMSG.FIND_BY_INTERVENTION_ID)
    findByInterventionId(@Payload()interventionID:string){
        return this.taskService.findByInterventionId(interventionID)
    }

    @MessagePattern(TaskMSG.FILTER)
    filter(@Payload()interventionDTO: any){
        return  this.taskService.filter(interventionDTO)
    }
  */
