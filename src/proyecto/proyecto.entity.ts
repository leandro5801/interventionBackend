import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Proyecto {
  @PrimaryGeneratedColumn()
  id_proyecto: number;

  @Column({ nullable: true })
  id_cliente: number;

  @Column()
  nombre_proyecto: string;

  @Column({ nullable: true })
  objetivos: string;

  @Column({ default: false })
  cargar_proyecto: boolean;
  @Column({ nullable: true })
  tipo_proyecto?: string;

  @Column('int', { array: true, nullable: true })
  consultores_asignados_id: number[];
}
