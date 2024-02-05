const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  // seu código aqui
  const empty = [];
  if (ids.length === 0 || !ids) {
    return empty;
  }
  const speciesIds = data.species.filter((specie) => ids.includes(specie.id));
  return speciesIds;
};

module.exports = getSpeciesByIds;
