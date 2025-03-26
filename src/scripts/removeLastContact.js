import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();
  const index = contacts.length - 1;
  const [result] = contacts.splice(index, 1);
  await writeContacts(contacts);
  return result;
};

removeLastContact();
