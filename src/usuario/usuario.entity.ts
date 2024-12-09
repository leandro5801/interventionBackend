import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column()
  nombre_usuario: string;

  @Column()
  contraseña: string;

  @Column()
  id_rol: number;
  @Column({ nullable: true })
  id_session: number;
}
