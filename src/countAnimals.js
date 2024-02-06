const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const { species, sex } = animal || {};

  if (!species) {
    const animalCounts = {};
    data.species.forEach((specie) => {
      const totalCount = specie.residents.length;
      animalCounts[specie.name] = totalCount;
    });
    return animalCounts;
  }

  const targetSpecies = data.species.find((specie) => specie.name === species);
  if (!targetSpecies) {
    return 'Espécie não encontrada';
  }

  if (!sex) {
    return targetSpecies.residents.length;
  }

  const filteredResidents = targetSpecies.residents.filter((resident) => resident.sex === sex);
  return filteredResidents.length;
};

module.exports = countAnimals;
