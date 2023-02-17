/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('feedback_post')
export class FeedbackPostEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  message: string;

  @Column({ default: '' })
  name: string;

  @Column({ default: '' })
  email: string;
  
}
