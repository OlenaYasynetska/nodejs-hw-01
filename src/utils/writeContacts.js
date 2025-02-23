import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export async function writeContacts(contacts) {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.error('Error writing contacts:', error.message);
  }
}


// const fs = require('fs/promises');
// const { PATH_DB } = require('../constants/contacts'); // ✅ Імпортуємо шлях до БД

// async function writeContacts(contacts) {
//   try {
//     await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
//   } catch (error) {
//     console.error('Error writing contacts:', error.message);
//   }
// }

// module.exports = { writeContacts };

// const fs = require('fs').promises;
// //import { PATH_DB } from '../constants/contacts.js';

// //export const writeContacts = async (updatedContacts) => {};

// const writeContacts = async (contacts) => {
//     try {
//       await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
//     } catch (error) {
//       console.error('Error writing contacts:', error.message);
//     }
//   };
  
//   module.exports = { writeContacts };