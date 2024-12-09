import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Session } from './sesion.entity';
import { SessionServices } from './sesion.service';
import { SessionController } from './sesion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Session])],
  controllers: [SessionController],
  providers: [SessionServices],
  // exports: [SessionServices],
})
export class SessionModule {}
