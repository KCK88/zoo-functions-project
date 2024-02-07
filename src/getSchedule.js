const data = require('../data/zoo_data');

const getAnimalDay = (animalName) => {
  const findAnimal = data.species.find((animal) => animal.name === animalName);
  return findAnimal ? findAnimal.availability : null;
};

const getObjectDays = () => {
  const arrayDays = Object.keys(data.hours);
  const objectDays = {};
  arrayDays.forEach((weekDay) => {
    if (data.hours[weekDay].open !== 0 && data.hours[weekDay].close !== 0) {
      objectDays[weekDay] = {
        officeHour: `Open from ${data.hours[weekDay].open}am until ${data.hours[weekDay].close}pm`,
        exhibition: data.species
          .filter((animalDay) => animalDay.availability.includes(weekDay))
          .map((animal) => animal.name),
      };
    } else {
      objectDays[weekDay] = {
        exhibition: 'The zoo will be closed!',
        officeHour: 'CLOSED',
      };
    }
  });
  return objectDays;
};

const getSchedule = (scheduleTarget) => {
  const animalDay = getAnimalDay(scheduleTarget);
  if (animalDay) {
    return animalDay;
  }
  const objectDays = getObjectDays();
  return objectDays[scheduleTarget] ? { [scheduleTarget]: objectDays[scheduleTarget] } : objectDays;
};
console.log(getSchedule(''));
module.exports = getSchedule;
