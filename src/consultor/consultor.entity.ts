import { Notificacion } from 'src/notificacion/notificacion.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Consultor {
  @PrimaryGeneratedColumn()
  id_consultor: number;

  @Column()
  nombre_consultor: string;

  @Column({ nullable: true })
  id_usuario?: number;

  @OneToMany(() => Notificacion, (notification) => notification.consultor, {
    eager: true,
  })
  notifications: Notificacion[];
}
