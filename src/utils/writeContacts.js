import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from './readContacts.js';

const updatedContacts = createFakeContact();

export const writeContacts = async (updatedContacts) => {
  const contacts = await readContacts();
  contacts.push(updatedContacts);
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
    console.log(`Data  successfully written to file`);
    return contacts;
  } catch (err) {
    console.error('Pardon the record in the file:', err);
  }
};

// Записуємо дані у файл 'output.txt'
/*(async () => {
  const data = 'Це дані, які ми записуємо у файл.';
  try {
    await fs.writeFile('output.txt', data, 'utf8');
    console.log('Дані успішно записані у файл.');
  } catch (err) {
    console.error('Помилка запису у файл:', err);
  }
})();*/
