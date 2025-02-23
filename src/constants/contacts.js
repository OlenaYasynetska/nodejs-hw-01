import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const PATH_DB = path.join(__dirname, '../db/db.json');


// const path = require('path');

// const PATH_DB = path.join(__dirname, '../db/db.json'); // ✅ Шлях до файлу БД

// module.exports = { PATH_DB };