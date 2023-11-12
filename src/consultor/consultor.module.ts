import { Module } from '@nestjs/common';
import { ConsultorController } from './consultor.controller';
import { ConsultorService } from './consultor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Consultor } from './consultor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Consultor])],
  controllers: [ConsultorController],
  providers: [ConsultorService],
})
export class ConsultorModule {}
