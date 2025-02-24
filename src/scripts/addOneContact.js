import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts(); // Зчитуємо поточний список контактів
    const newContact = createFakeContact(); // Генеруємо новий контакт
    contacts.push(newContact); // Додаємо його до масиву
    await writeContacts(contacts); // Записуємо оновлений масив у файл
    console.log('✅ Один контакт додано!');
  } catch (error) {
    console.error('❌ Помилка при додаванні контакту:', error);
  }
};

addOneContact();
