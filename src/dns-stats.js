const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */

 function getDNSStats(domains) {
   let obj = {};  
   domains.forEach(item => {
     let endDomain = '';
     while(item.lastIndexOf('.') + 1) {  
       let indexDat = item.lastIndexOf('.');    
       let domain = item.slice(indexDat); 
       endDomain = endDomain + domain;
       item = item.slice(0,indexDat);
       if(Object.keys(obj).includes(endDomain)) {
         obj[endDomain] = obj[endDomain] + 1;
       } else {
         obj[endDomain] = 1;
       }
     }
     endDomain = `${endDomain}.${item}`;
     if(Object.keys(obj).includes(endDomain)) {
       obj[endDomain] = obj[endDomain] + 1;
     } else {
      obj[endDomain] = 1;
     }
   });
   return obj;
 }


module.exports = {
  getDNSStats
};
