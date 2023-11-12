import { Module } from '@nestjs/common';
import { UebController } from './ueb.controller';
import { UebService } from './ueb.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ueb } from './ueb.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ueb])],
  controllers: [UebController],
  providers: [UebService],
})
export class UebModule {}
