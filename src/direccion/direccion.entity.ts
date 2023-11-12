import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Direccion {
  @PrimaryGeneratedColumn()
  idDireccion: number;

  @Column()
  idUeb: number;

  @Column()
  nombreDireccion: string;
}
