import { Module } from '@nestjs/common';
import { UebController } from './ueb.controller';
import { UebService } from './ueb.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ueb } from './ueb.entity';
import { EmpresaModule } from 'src/empresa/empresa.module';

@Module({
  imports: [TypeOrmModule.forFeature([Ueb]), EmpresaModule],
  exports: [UebService],
  controllers: [UebController],
  providers: [UebService],
})
export class UebModule {}
