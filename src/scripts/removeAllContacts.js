import { writeContacts } from "../utils/writeContacts.js";

export const removeAllContacts = async () => {
  await writeContacts([]); // Записываем пустой массив в db.json
  console.log("✅ Все контакты удалены!");
};

removeAllContacts();
