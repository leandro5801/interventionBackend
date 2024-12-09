import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class SessionDto {
  @IsOptional()
  id: number;
  @IsNumber()
  @IsOptional()
  id_usuario?: number;
  @IsOptional()
  // @IsBoolean()
  isDark?: boolean;
  @IsOptional()
  // @IsBoolean()
  font?: string;
}
