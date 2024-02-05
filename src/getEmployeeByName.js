const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }

  return data.employees.find((employe) => employe.firstName || employe.lastName === employeeName);
};
console.log(getEmployeeByName(''));
module.exports = getEmployeeByName;
