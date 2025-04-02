import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Intervencion } from './intervencion.entity';

@Entity()
export class Periodo {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ type: 'date' })
  start_date: Date;

  @Column({ type: 'date' })
  end_date: Date;

  @ManyToOne(() => Intervencion, (intervencion) => intervencion.periodos, {
    onDelete: 'CASCADE',
  })
  intervencion: Intervencion;
}
