import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

export const createFakeContact = () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  phone: faker.phone.number(),
  email: faker.internet.email(),
  job: faker.person.jobTitle(),
});
createFakeContact();
