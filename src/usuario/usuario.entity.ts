import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  idUsuario: number;

  @Column()
  nombreUsuario: string;

  @Column()
  contraseña: string;

  @Column()
  rol: string;
}
