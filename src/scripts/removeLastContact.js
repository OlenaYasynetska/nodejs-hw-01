import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (!Array.isArray(contacts)) {
      throw new Error("Ошибка: Данные в db.json повреждены или не являются массивом.");
    }

    if (contacts.length === 0) {
      console.log("⚠️ Контактов нет, удалять нечего!");
      return;
    }

    contacts.pop();
    await writeContacts(contacts);

    console.log("✅ Последний контакт удален!");
  } catch (error) {
    console.error("❌ Ошибка при удалении последнего контакта:", error.message);
  }
};

removeLastContact();



// import { readContacts } from "../utils/readContacts.js";
// import { writeContacts } from "../utils/writeContacts.js";

// export const removeLastContact = async () => {
//   const contacts = await readContacts();

//   if (contacts.length === 0) {
//     console.log("⚠️ Контактов нет, удалять нечего!");
//     return;
//   }

//   contacts.pop(); // Удаляем последний контакт
//   await writeContacts(contacts); // Записываем обновленный список

//   console.log("✅ Последний контакт удален!");
// };

// removeLastContact();