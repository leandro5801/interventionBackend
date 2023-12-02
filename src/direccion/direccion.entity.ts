import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Direccion {
  @PrimaryGeneratedColumn()
  id_direccion: number;

  @Column()
  id_ueb: number;

  @Column()
  nombre_direccion: string;
}
