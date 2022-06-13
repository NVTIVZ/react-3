import { add, multiply, pipe } from "ramda";
import faker from "faker";

const getRandomTimeout = () =>
  pipe(multiply(2), add(1), multiply(1000))(Math.random());

const getRandomScore = () => pipe(multiply(10), Math.floor)(Math.random());

const generateRandomPlayers = (length) =>
  Array.from({ length }, () => ({
    name: faker.name.firstName(),
    surname: faker.name.lastName(),
    description: faker.commerce.productDescription(),
  }));

const generateRandomTeams = (length) =>
  Array.from({ length }, () => ({
    teamName: faker.commerce.productName(),
    playerNames: Array.from({ length: 6 }, () => faker.name.findName()),
    description: faker.commerce.productDescription(),
  }));

const delay = () =>
  new Promise((resolve) => setTimeout(resolve, getRandomTimeout()));

const getPromise = async (nameFn, resolveFn) => {
  await delay();
  return new Promise((resolve, reject) => {
    if (getRandomScore() <= 2) {
      reject(`${nameFn} network error`);
    }
    resolve(resolveFn);
  });
};

const getPlayers = (players) =>
  getPromise("getPlayers", generateRandomPlayers(players));

const getTeams = (teams) => getPromise("getTeams", generateRandomTeams(teams));

export { getPlayers, getTeams };
