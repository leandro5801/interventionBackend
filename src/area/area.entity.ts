import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Area {
  @PrimaryGeneratedColumn()
  idArea: number;

  @Column()
  idDireccion: number;

  @Column()
  nombreArea: string;
}
