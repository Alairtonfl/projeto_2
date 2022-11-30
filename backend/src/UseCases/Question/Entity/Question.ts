import { BaseEntity } from '@Bases/BaseEntity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Answer from '@Answer/Entity/Answer';
import User from '@User/Entity/User';

@Entity('question')
export default class Question extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
      id: number;

    @Column('text')
      question: string;
    
    @Column('text')
      theme: string;

    @Column('int')
      userId: number;
    
    @Column('int')
      dificulty: number;

    @ManyToOne(() => User, (user) => user.questions)
      user: User;

    @OneToMany(() => Answer, (answer) => answer.question, {
      cascade: true,
    })
      answers: Answer[];
}
