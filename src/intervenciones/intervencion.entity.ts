import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { Recomendacion } from 'src/recomendacion/recomendacion.entity';
@Entity()
export class Intervencion {
  @PrimaryGeneratedColumn()
  id_intervencion: number;

  @Column()
  nombre_intervencion: string;

  @Column()
  descripcion: string;

  @Column()
  id_area: number;

  @Column()
  id_trabajador: number;

  @Column()
  id_proyecto: number;

  @Column()
  id_consultor: number;

  @Column({ type: 'date' })
  start_date: Date;

  @Column({ type: 'date' })
  end_date: Date;
}
