import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from '../utils/readContacts.js';

export const removeAllContacts = async () => {
  try {
    const contacts = await readContacts();
    const [result] = contacts.splice(0);
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(`All contacts delete`, contacts);
    return result;
  } catch (err) {
    console.error('Error of delete:', err);
  }
};

removeAllContacts();
