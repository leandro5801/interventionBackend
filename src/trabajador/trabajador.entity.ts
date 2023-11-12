import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Trabajador {
  @PrimaryGeneratedColumn()
  idTrabajador: number;

  @Column()
  nombreTrabajador: string;

  @Column()
  idArea: number;
}
