import { createPool } from "mysql2/promise";

export const db = createPool({
    host: 'precios-1.c0f6dm2ucnlg.us-east-2.rds.amazonaws.com',
    port: 3306,
    user: 'candidatoPrueba',
    password: 'gaspre21.M',
    database: 'prueba'
  });


