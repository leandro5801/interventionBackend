import { Consultor } from 'src/consultor/consultor.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Notificacion {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  mensaje: string;
  @CreateDateColumn()
  createdAt: Date;
  @Column({ default: false })
  isRead: boolean;
  @ManyToOne(() => Consultor, (consultor) => consultor.notifications)
  consultor: Consultor;
}
