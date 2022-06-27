import { add, multiply, pipe } from "ramda";
import faker from "faker";
import Future, { after, rejectAfter } from "fluture";

const getRandomTimeout = () =>
  pipe(multiply(2), add(1), multiply(1000), Math.floor)(Math.random());

const getRandomScore = () => pipe(multiply(10), Math.floor)(Math.random());

const generateRandomPlayers = (length) =>
  Array.from({ length }, () => ({
    name: faker.name.firstName(),
    surname: faker.name.lastName(),
    description: faker.commerce.productDescription(),
  }));

const generateRandomTeams = (length) =>
  Array.from({ length }, () => ({
    name: faker.company.companyName(),
    playerNames: Array.from({ length: 5 }, () => faker.name.findName()),
    description: faker.lorem.sentences(),
  }));

const getFuture = (nameFn, resolveFn) => {
  if (getRandomScore() <= 2) {
    return rejectAfter(getRandomTimeout())(`${nameFn} network error`);
  }
  return after(getRandomTimeout())(resolveFn);
};

const getPlayers = (players) =>
  getFuture("getPlayers", generateRandomPlayers(players));

const getTeams = (teams) => getFuture("getTeams", generateRandomTeams(teams));

export { getPlayers, getTeams };
