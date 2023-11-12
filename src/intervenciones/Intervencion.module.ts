import { Module } from '@nestjs/common';
import { IntervencionController } from './Intervencion.controller';
import { IntervencionService } from './Intervencion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Intervencion } from './intervencion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Intervencion])],
  controllers: [IntervencionController],
  providers: [IntervencionService],
})
export class IntervencionModule {}
