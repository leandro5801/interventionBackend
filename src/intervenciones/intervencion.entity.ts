import {
  CreateDateColumn,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Intervencion {
  @PrimaryGeneratedColumn()
  idIntervencion: number;

  @Column()
  nombreIntervencion: string;

  @Column()
  descripcionIntervencion: string;

  @Column()
  empresaIntervencion: string;

  @Column()
  uebIntervencion: string;

  @Column()
  estructuraIntervencion: string;

  @Column()
  areaIntervencion: string;

  @Column()
  trabajadorIntervencion: string;

  @Column()
  consultorIntervencion: string;

  @CreateDateColumn()
  startDateIntervencion: Date;

  @CreateDateColumn()
  endDateIntervencion: Date;

  @Column()
  progresoIntervencion: number;
}
