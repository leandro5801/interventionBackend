import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Area {
  @PrimaryGeneratedColumn()
  id_area: number;

  @Column()
  id_direccion: number;

  @Column()
  nombre_area: string;
}
