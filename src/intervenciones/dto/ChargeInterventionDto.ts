import { IsNumber, IsString } from 'class-validator';

export class ChargeInterventionDto {
  @IsString()
  nombre_proyecto: string;
  @IsNumber()
  id_proyecto: number;
}
