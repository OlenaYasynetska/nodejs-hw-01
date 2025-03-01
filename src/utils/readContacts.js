import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export async function readContacts() {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error.message);
    return [];
  }
}


// const fs = require('fs/promises');
// const { PATH_DB } = require('../constants/contacts'); // ✅ Переконайся, що імпортується правильно

// async function readContacts() {
//   try {
//     const data = await fs.readFile(PATH_DB, 'utf-8');
//     return JSON.parse(data);
//   } catch (error) {
//     console.error('Error reading contacts:', error.message);
//     return [];
//   }
// }

// module.exports = { readContacts };



//import { PATH_DB } from '../constants/contacts.js';

// const fs = require('fs').promises;
// const { PATH_DB } = require('../constants/contacts');

// const readContacts = async () => {
//   try {
//     const data = await fs.readFile(PATH_DB, 'utf-8');
//     return JSON.parse(data);
//   } catch (error) {
//     console.error('Error reading contacts:', error.message);
//     return [];
//   }
// };

// module.exports = { readContacts };