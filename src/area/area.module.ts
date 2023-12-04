import { Module } from '@nestjs/common';
import { AreaController } from './area.controller';
import { AreaService } from './area.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Area } from './area.entity';
import { DireccionModule } from 'src/direccion/direccion.module';

@Module({
  imports: [TypeOrmModule.forFeature([Area]), DireccionModule],
  exports: [AreaService],
  controllers: [AreaController],
  providers: [AreaService],
})
export class AreaModule {}
