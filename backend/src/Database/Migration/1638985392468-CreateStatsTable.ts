import {
  MigrationInterface, QueryRunner, Table, TableForeignKey,
} from 'typeorm';

export class CreateStatsTable1638985392468 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'user_stats',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          generationStrategy: 'increment',
          isGenerated: true,
        },
        {
          name: 'userId',
          type: 'int',
          isNullable: false,
        },
        {
          name: 'matchs',
          type: 'int',
          isNullable: false,
          default: 0,
        },
        {
          name: 'answer_questions',
          type: 'int',
          isNullable: false,
          default: 0,
        },
        {
          name: 'prizee',
          type: 'float',
          isNullable: false,
          default: 0,
        },
        {
          name: 'defeats',
          type: 'int',
          isNullable: false,
          default: 0,
        },
        {
          name: 'wins',
          type: 'int',
          isNullable: false,
          default: 0,
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
      'user_stats',
      new TableForeignKey({
        columnNames: ['userId'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // const table = await queryRunner.getTable('user_stats');
    // const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('userId') !== -1);
    // await queryRunner.dropForeignKey('user_stats', foreignKey);
    await queryRunner.dropTable('user_stats');
  }
}
