import { IsDate, IsOptional } from 'class-validator';

export class PeriodoDto {
  @IsOptional()
  id: string;
  @IsDate()
  startDate: Date;

  @IsDate()
  endDate: Date;
}
