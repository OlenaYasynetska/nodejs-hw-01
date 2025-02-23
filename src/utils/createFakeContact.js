import { faker } from "@faker-js/faker";

export function createFakeContact() {
  return {
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
  };
}

//=========================================

// const { faker } = require('@faker-js/faker');

// function createFakeContact() {
//   return {
//     id: faker.string.uuid(),
//     name: faker.person.fullName(),
//     phone: faker.phone.number(),
//     email: faker.internet.email(),
//     job: faker.person.jobTitle(),
//   };
// }

// module.exports = { createFakeContact };