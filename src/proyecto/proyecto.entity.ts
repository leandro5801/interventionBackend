import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Proyecto {
  @PrimaryGeneratedColumn()
  idProyecto: number;

  @Column()
  idCliente: string;

  @Column()
  idConsultor: string;

  @Column()
  nombreProyecto: string;

  @Column()
  objetivos: string;

  @Column()
  consultores_asignados: string;
}
