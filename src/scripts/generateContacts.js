import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const generateContacts = async (number) => {
  const contacts = await readContacts();
  for (let i = 1; i <= number; i++) {
    const newContact = createFakeContact();
    contacts.push(newContact);
  }
  await writeContacts(contacts);
  return await readContacts();
};

generateContacts(5);
