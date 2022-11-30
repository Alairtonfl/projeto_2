import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export class CreateQuestionTable1639066859131 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'question',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          generationStrategy: 'increment',
          isGenerated: true,
        },
        {
          name: 'question',
          type: 'VARCHAR',
          isNullable: false,
        },
        {
          name: 'userId',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'theme',
          type: 'VARCHAR',
          isNullable: false,
        },
        {
          name: 'dificulty',
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
      'question',
      new TableForeignKey({
        columnNames: ['userId'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // const table = await queryRunner.getTable('question');
    // const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('userId') !== -1);
    // await queryRunner.dropForeignKey('question', foreignKey);
    await queryRunner.dropTable('question');
  }
}
