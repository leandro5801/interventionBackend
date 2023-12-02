import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ueb {
  @PrimaryGeneratedColumn()
  id_ueb: number;

  @Column()
  id_empresa: number;

  @Column()
  nombre_ueb: string;
}
