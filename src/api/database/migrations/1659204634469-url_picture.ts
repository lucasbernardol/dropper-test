import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class urlPicture1659204634469 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'url',
      new TableColumn({
        name: 'picture_id',
        type: 'int',
        isNullable: true,
        default: null,
      })
    );

    await queryRunner.createForeignKey(
      'url',
      new TableForeignKey({
        columnNames: ['picture_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'pictures',
        onDelete: 'SET NULL',
        onUpdate: 'SET NULL',
        name: 'fk_picture_pic',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('url', 'picture_id');
    await queryRunner.dropForeignKey('url', 'fk_picture_pic');
  }
}
