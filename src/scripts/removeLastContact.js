import { readContacts } from '../utils/readContacts.js';
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();
    const index = contacts.length - 1;
    const [result] = contacts.splice(index, 1);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(`Last contact delete`, result);
    return result;
  } catch (err) {
    console.error('Error of delete:', err);
  }
};

removeLastContact();
