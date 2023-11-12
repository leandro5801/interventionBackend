import {
  CreateDateColumn,
  Entity,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Recomendacion {
  @PrimaryGeneratedColumn()
  idIntervencion: number;

  @PrimaryGeneratedColumn()
  idRecom: number;

  @Column()
  nombreRecom: string;

  @Column()
  nombreConsultRecom: string;

  @Column()
  descripRecom: string;

  @CreateDateColumn()
  fechaCreaRecom: Date;

  @CreateDateColumn()
  fechaFinRecom: Date;

  @Column()
  seguimiento: boolean;
}
