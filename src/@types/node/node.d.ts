declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: string;

    DATABASE_SCHEMA: string;

    DATABASE_TYPE: string;
    DATABASE_NAME: string;
    DATABASE_USERNAME: string;
    DATABASE_PASSWORD: string;
    DATABASE_HOST: string;
    DATABASE_PORT: string;
    DATABASE_MIGRATIONS_TABLE_NAME: string;
  }
}
