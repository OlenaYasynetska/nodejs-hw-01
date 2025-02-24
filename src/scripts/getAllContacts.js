import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
  const contacts = await readContacts();
  return contacts; // Возвращаем массив контактов
};

console.log(await getAllContacts());
