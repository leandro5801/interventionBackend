import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Proyecto {
  @PrimaryGeneratedColumn()
  id_proyecto: number;

  @Column()
  id_cliente: number;

  @Column()
  nombre_proyecto: string;

  @Column()
  objetivos: string;

  @Column('int', { array: true })
  consultores_asignados_id: number[];
}
