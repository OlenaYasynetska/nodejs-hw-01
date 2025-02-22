// const generateContacts = async (number) => {};

// generateContacts(5);

const { readContacts } = require('../utils/readContacts');
const { writeContacts } = require('../utils/writeContacts');
const { createFakeContact } = require('../utils/createFakeContact');

const generateContacts = async (count = 1) => {
  try {
    const contacts = await readContacts();
    const newContacts = Array.from({ length: count }, () => createFakeContact());
    const updatedContacts = [...contacts, ...newContacts];

    await writeContacts(updatedContacts);
    console.log(`✅ Додано ${count} контактів!`);
  } catch (error) {
    console.error('❌ Помилка генерації контактів:', error.message);
  }
};

// Виклик функції, якщо запускається через npm script
generateContacts(5);

module.exports = { generateContacts };