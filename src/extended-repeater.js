const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {  
   if(!options.separator) options.separator = "+";
   if(!options.additionSeparator) options.additionSeparator = '|';
   if(options.addition == false) {
    options.addition = 'false';
   } else if(options.addition === null) {
    options.addition = 'null'
   }
   if(!options.addition) options.addition = '';
   if(!options.repeatTimes) options.repeatTimes = 1;
   if(!options.additionRepeatTimes) options.additionRepeatTimes = 1;
   let string = '';
   let sepString = `${options.addition}`;
   for(let i = 1; i < options.additionRepeatTimes; i++) {
    sepString += `${options.additionSeparator}${options.addition}`
   }
   for(let j = 1; j <= options.repeatTimes; j++) {
     if(j == options.repeatTimes) {
       string = string + str + sepString;
     } else {
       string = string + str + sepString + options.separator;
     }    
   }
   return string
 }

module.exports = {
  repeater
};
