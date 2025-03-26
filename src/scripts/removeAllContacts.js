import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeAllContacts = async () => {
  const contacts = await readContacts();
  const [result] = contacts.splice(0);
  await writeContacts(contacts);
  return result;
};

removeAllContacts();
