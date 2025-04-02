import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { Recomendacion } from 'src/recomendacion/recomendacion.entity';
import { Periodo } from './periodo.entity';
@Entity()
export class Intervencion {
  @PrimaryGeneratedColumn()
  id_intervencion: number;

  @Column()
  nombre_intervencion: string;

  @Column({ nullable: true })
  descripcion: string;

  @Column({ default: false })
  cargar_intervencion: boolean;

  @Column({ nullable: true })
  id_area: number;

  @Column({ nullable: true })
  id_trabajador: number;

  @Column()
  id_proyecto: number;

  @Column({ nullable: true })
  id_consultor: number;

  @OneToMany(() => Periodo, (periodo) => periodo.intervencion, {
    eager: true,
    cascade: ['insert', 'remove', 'update'],
  })
  periodos: Periodo[];
}
