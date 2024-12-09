import { Notificacion } from 'src/notificacion/notificacion.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: false })
  isDark: boolean;
  @Column({ unique: true })
  id_usuario: number;
  @Column({ default: '' })
  font: string;
}
