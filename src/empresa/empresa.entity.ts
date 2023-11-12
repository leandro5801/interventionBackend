import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Empresa {
  @PrimaryGeneratedColumn()
  idEmpresa: number;

  @Column()
  nombreEmpresa: string;
}
