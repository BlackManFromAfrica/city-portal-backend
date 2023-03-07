import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('applications')
export class Application {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  category: string;

  @Column()
  photos: string
}
