import Database from 'better-sqlite3';

// Ouvre  la base SQLite
const db = new Database('database.db');

// On crée la table users
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL
  );
  
`);

export default db;
