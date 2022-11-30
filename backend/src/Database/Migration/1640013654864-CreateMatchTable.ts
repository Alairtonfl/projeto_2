import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateMatchTable1640013654864 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'match',
            columns: [
              {
                name: 'id',
                type: 'int',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment',
              },
              {
                name: 'userId',
                type: 'int',
                isNullable: false,
              },
              {
                name: 'prizee',
                type: 'float',
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
            'match',
            new TableForeignKey({
              columnNames: ['userId'],
              referencedTableName: 'users',
              referencedColumnNames: ['id'],
              onDelete: 'CASCADE',
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('match');
    }

}
