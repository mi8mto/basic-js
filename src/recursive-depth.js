const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

class DepthCalculator {
  
    constructor() {
      this.maxDeep = 1;
      this.deep = 1;
    }
    calculateDepth(arr) {
      arr.forEach(item => {
      if(Array.isArray(item) && item.length) {
        this.deep++;
        if(this.maxDeep <= this.deep) this.maxDeep = this.deep;
        this.calculateDepth(item);
        this.deep--;
      } else if(Array.isArray(item) && !item.length) {
        this.deep++;
        if(this.maxDeep <= this.deep) this.maxDeep = this.deep;
        this.deep--;
      } 
      });
      return this.maxDeep;
      }
    }

 module.exports = {
   DepthCalculator
};
