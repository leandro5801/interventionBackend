import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { Intervencion } from 'src/intervenciones/intervencion.entity';

@Entity()
export class Recomendacion {
  @PrimaryGeneratedColumn()
  id_recomendacion: number;

  @Column()
  id_intervencion: number;

  @Column()
  nombre_recomendacion: string;

  @Column()
  id_consultor: number;

  @Column()
  id_clasificacion: number;

  @Column()
  descripcion_recomendacion: string;

  @Column({ type: 'date' })
  fecha_recomendacion: Date;

  @Column()
  seguimiento: boolean;
}
