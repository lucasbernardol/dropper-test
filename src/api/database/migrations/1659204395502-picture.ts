import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class picture1659204395502 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'pictures',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },

          {
            name: 'href',
            type: 'varchar',
            length: '255',
          },

          {
            name: 'url_id',
            type: 'int',
            isNullable: true,
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
        ],
        foreignKeys: [
          {
            name: 'fk_url_status',
            columnNames: ['url_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'url',
            onDelete: 'CASCADE',
            onUpdate: 'SET NULL',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('pictures');
  }
}
