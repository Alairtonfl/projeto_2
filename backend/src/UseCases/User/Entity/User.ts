import { BaseEntity } from '@Bases/BaseEntity';
import { Column, Entity, PrimaryGeneratedColumn,
  BeforeInsert, BeforeUpdate, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import bcrypt from 'bcrypt';
import UserStats from '@UserStats/Entity/UserStats';
import Question from '@Question/Entity/Question';
import Match from '@Match/Entity/Match';

@Entity('users')
export default class User extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
      id: number;

    @Column('text')
      email: string;

    @Column('text')
      name: string;

    @Column('text')
      password: string;

    @Column('text')
      avatar: string;

    @OneToOne(() => UserStats, (userStats) => userStats.user, {
      cascade: true,
    })
      stats: UserStats;

    @OneToMany(() => Question, (question) => question.user, {
      cascade: true,
    })
      questions: Question[];

    @OneToMany(() => Match, (match) => match.user, {
      cascade: true,
    })
      matchs: Match[];

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
      this.password = bcrypt.hashSync(this.password, 10);
    }

    @BeforeInsert()
    @BeforeUpdate()
    trimUsername() {
      this.name = this.name.trim().replace(' ', '');
    }
}
