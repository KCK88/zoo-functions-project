const data = require('../data/zoo_data');

function getEmployeeById(id) {
  return data.employees.find((emp) => emp.id === id);
}

function getSpeciesById(speciesId) {
  return data.species.find((species) => species.id === speciesId);
}

function getOldestAnimal(residents) {
  return residents.reduce((oldest, current) => {
    const old = current.age > oldest.age ? current : oldest;
    return old;
  });
}

function getOldestFromFirstSpecies(id) {
  const employee = getEmployeeById(id);

  if (!employee) {
    return 'Employee not found';
  }

  for (const speciesId of employee.responsibleFor) {
    const species = getSpeciesById(speciesId);
    if (species) {
      const oldestAnimal = getOldestAnimal(species.residents);
      return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
    }
  }

  return 'No species found';
}

module.exports = getOldestFromFirstSpecies;
