import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Consultor {
  @PrimaryGeneratedColumn()
  id_consultor: number;

  @Column()
  nombre_consultor: string;

  @Column()
  id_usuario: number;
}
