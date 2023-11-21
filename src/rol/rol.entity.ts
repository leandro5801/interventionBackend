import {
  CreateDateColumn,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Rol {
  @PrimaryGeneratedColumn()
  id_rol: number;

  @Column()
  nombre_rol: string;
}
