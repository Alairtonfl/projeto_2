import { BaseEntity } from '@Bases/BaseEntity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Question from '@Question/Entity/Question';

@Entity('answer')
export default class Answer extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
      id: number;

    @Column('text')
      answer: string;

    @Column('int')
      questionId: number;

    @Column('boolean')
      correct: boolean;

    @ManyToOne(() => Question, (question) => question.answers)
      question: Question;
}
