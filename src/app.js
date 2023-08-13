import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    const data = read()
      .then((response) => json(response))
      .then((response) => {
        const GameSaving = JSON.parse(response);
        return GameSaving;
      });
    return data;
  }
}
