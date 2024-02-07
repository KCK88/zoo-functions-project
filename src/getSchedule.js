const data = require('../data/zoo_data');

const getObjectDays = () => {
  const arrayDays = Object.keys(data.hours);
  const objectDays = {};
  //  const exhibitionArray = data.species.filter((animalDay) =>
  //    animalDay.availability.includes(day));
  arrayDays.forEach((weekDay) => {
    objectDays[weekDay] = {
      officeHour: `Open from ${data.hours[weekDay].open}am until ${data.hours[weekDay].close}pm`,
      exhibition: data.species
        .filter((animalDay) => animalDay.availability.includes(weekDay))
        .map((animal) => animal.name),
    };
  });
  return objectDays;
};

const getSchedule = (scheduleTarget) => {
  if (scheduleTarget === undefined) {
    return getObjectDays();
  }
};
console.log(getSchedule());
module.exports = getSchedule;
