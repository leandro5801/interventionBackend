import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Trabajador {
  @PrimaryGeneratedColumn()
  id_trabajador: number;

  @Column()
  nombre_trabajador: string;

  @Column()
  id_area: number;
}
