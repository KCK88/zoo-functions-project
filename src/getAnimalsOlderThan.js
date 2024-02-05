const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  const animals = data.species.find((species) => species.name === animal);

  if (!animals) {
    return false;
  }

  const older = animals.residents.every((animalAge) => animalAge.age >= age);
  return older;
};

module.exports = getAnimalsOlderThan;
