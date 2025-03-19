import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
  for (let i = 1; i <= number; i++) {
    const newContact = createFakeContact();
    await writeContacts(newContact);
  }
  return readContacts;
};

generateContacts(5);
