import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Consultor {
  @PrimaryGeneratedColumn()
  idProyecto: number;

  @Column()
  idConsultor: number;

  @Column()
  nombreConsultor: string;
}
