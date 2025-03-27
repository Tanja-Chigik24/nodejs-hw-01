import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from './readContacts.js';

const updatedContacts = createFakeContact();

export const writeContacts = async (updatedContacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
  } catch (err) {
    console.error('Pardon the record in the file:', err);
  }
};
