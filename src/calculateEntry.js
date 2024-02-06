const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  let childCount = 0;
  let adultCount = 0;
  let seniorCount = 0;

  entrants.forEach((visitor) => {
    if (visitor.age < 18) {
      childCount += 1;
    } else if (visitor.age >= 18 && visitor.age < 50) {
      adultCount += 1;
    } else {
      seniorCount += 1;
    }
  });

  return { child: childCount, adult: adultCount, senior: seniorCount };
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }

  const entrantsCount = countEntrants(entrants);

  let totalEntryFee = 0;
  Object.keys(entrantsCount).forEach((category) => {
    const price = data.prices[category];
    totalEntryFee += price * entrantsCount[category];
  });

  return parseFloat(totalEntryFee.toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
