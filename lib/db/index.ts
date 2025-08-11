// file: lib/db/index.ts
import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';

// เปิดใช้งาน WAL mode เพื่อประสิทธิภาพที่ดีขึ้น
const sqlite = new Database('sqlite.db');
sqlite.pragma('journal_mode = WAL');

export const db = drizzle(sqlite);
