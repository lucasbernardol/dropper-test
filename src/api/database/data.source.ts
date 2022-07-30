import { DataSource } from 'typeorm';
import { resolve } from 'path';

/**
 * PostgresSQL PORT: 5432
 */
const PORT = Number(process.env.DATABASE_PORT);

const AppDataSource = new DataSource({
  type: 'postgres',
  port: PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  synchronize: false,
  logging: true,
  migrations: [resolve(__dirname, 'migrations', '*')],
  entities: [resolve(__dirname, '..', 'entities', '*')],
  migrationsTableName: 'migrations',
  cache: true,
});

export class Database {
  /**
   * - TypeORM connection.
   * @returns
   */
  static async connect(): Promise<DataSource> {
    try {
      const connection = await AppDataSource.initialize();

      return connection;
    } catch (error) {
      console.error(error);
    }
  }
}

export default AppDataSource;
