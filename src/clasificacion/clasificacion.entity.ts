import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Clasificacion {
  @PrimaryGeneratedColumn()
  id_clasificacion: number;

  @Column()
  nombre_clasificacion: string;
}
