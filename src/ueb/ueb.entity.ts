import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ueb {
  @PrimaryGeneratedColumn()
  idUeb: number;

  @Column()
  idEmpresa: number;

  @Column()
  nombreUeb: string;
}
