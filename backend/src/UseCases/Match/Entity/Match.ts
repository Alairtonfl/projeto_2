import { BaseEntity } from "@Bases/BaseEntity";
import Question from "@Question/Entity/Question";
import User from "@User/Entity/User";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('match')
export default class Match extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('float')
    prizee: number

    @ManyToOne(() => User, (user) => user.matchs)
      user: User;
    
    @ManyToMany(() => Question, {
      cascade: true
    })
    @JoinTable()
      questions: Question[]
}