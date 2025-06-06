import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Products1749157906219 implements MigrationInterface {
  name = 'Products1749157906219';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: 'id',
            type: 'serial',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'text',
            isNullable: true,
          },
          {
            name: 'price',
            type: 'numeric',
            precision: 10,
            scale: 2,
            isNullable: false,
          },
          {
            name: 'sku',
            type: 'varchar',
            length: '100',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'stock_quantity',
            type: 'integer',
            isNullable: false,
            default: "'0'",
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            isNullable: false,
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            isNullable: false,
            default: 'now()',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // A ordem de DROP é geralmente o inverso da criação
    await queryRunner.dropIndex('products', 'IDX_products_name'); // Use o mesmo nome do índice criado
    await queryRunner.dropTable('products');
  }
}
