const data = require('../data/zoo_data');

let allEmployee = {};
function getEmployeesCoverage(ids) {
  if (ids === undefined) return allEmployee;
  const testEmployee = allEmployee.find(
    (enployee) =>
      enployee.fullName.includes(Object.values(ids))
      || enployee.id.includes(Object.values(ids)),
  );
  if (testEmployee === undefined) {
    throw new Error('Informações inválidas');
  }
  return testEmployee;
}

allEmployee = data.employees.map((objeto) => {
  const especiesName = objeto.responsibleFor.map(
    (id) => data.species.find((specie) => specie.id === id).name,
  );
  const especiesLocation = objeto.responsibleFor.map(
    (id) => data.species.find((specie) => specie.id === id).location,
  );
  const employeeArray = {
    id: objeto.id,
    fullName: `${objeto.firstName} ${objeto.lastName}`,
    species: especiesName,
    locations: especiesLocation,
  };
  return employeeArray;
});

module.exports = getEmployeesCoverage;
