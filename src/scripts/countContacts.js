import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
  const contacts = await readContacts();
  return contacts.length; // Возвращаем количество контактов
};

console.log(await countContacts());



// import { readContacts } from "../utils/readContacts.js";

// export const countContacts = async () => {
//   try {
//     const contacts = await readContacts(); // Зчитуємо поточний список контактів
//     return contacts.length; // Повертаємо кількість контактів
//   } catch (error) {
//     console.error("❌ Помилка під час підрахунку контактів:", error);
//     return 0; // У разі помилки повертаємо 0
//   }
// };

// console.log("📊 Кількість контактів:", await countContacts());
