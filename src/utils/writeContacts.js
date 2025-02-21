const fs = require('fs').promises;
import { PATH_DB } from '../constants/contacts.js';

//export const writeContacts = async (updatedContacts) => {};

const writeContacts = async (contacts) => {
    try {
      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    } catch (error) {
      console.error('Error writing contacts:', error.message);
    }
  };
  
  module.exports = { writeContacts };