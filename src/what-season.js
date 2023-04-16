const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {  
  if(date === undefined) {
    return 'The season cannot be determined!';
  }   
  try {
    date.getMonth();
  } catch {
    throw new Error("Invalid date!");
  }
  try {
    date.setMonth(date.getMonth());
  } catch {
    throw new Error("Invalid date!");
  }
  if(date.constructor.name != 'Date') throw new Error("Invalid date!");
  else if(date.constructor.name == 'Date') {
    if(date.getMonth() <= 1) return 'winter';
    else if(date.getMonth() <= 4 && date.getMonth() >= 2) return 'spring';
    else if(date.getMonth() <= 7 && date.getMonth() >= 5) return 'summer';
    else if(date.getMonth() <= 10 && date.getMonth() >= 8) return 'autumn';
    else if(date.getMonth() == 11)  return 'winter';
  } else {
    throw new Error("Invalid date!");
  }  
}

module.exports = {
  getSeason
};
