import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateMatchQuestionsTable1640013975969 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'match_questions_question',
            columns: [
              {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'matchId',
                type: 'int',
                isNullable: false,
              },
              {
                name: 'questionId',
                type: 'int',
                isNullable: false,
              },
              {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()',
              },
              {
                name: 'updated_at',
                type: 'timestamp',
                default: 'now()',
              },
              {
                name: 'deleted_at',
                type: 'timestamp',
                isNullable: true,
                default: null,
              },
            ],
          }));
          await queryRunner.createForeignKey(
            'match_questions_question',
            new TableForeignKey({
              columnNames: ['matchId'],
              referencedTableName: 'match',
              referencedColumnNames: ['id'],
              onDelete: 'CASCADE',
            }),
          );
          await queryRunner.createForeignKey(
            'match_questions_question',
            new TableForeignKey({
              columnNames: ['questionId'],
              referencedTableName: 'question',
              referencedColumnNames: ['id'],
              onDelete: 'CASCADE',
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('match_questions_question');
    }

}
