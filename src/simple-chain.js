const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  values: [],
  getLength() {
    return this.values.length
  },
    addLink(value) {
      this.values.push(value);
      return this;
  },
    removeLink(position) {
      const isFractional = (Math.round(position) - position) != 0;
      const isNumber = typeof(position) == 'number';
//       console.log(!isFractional, isNumber, position <= this.values.length, position >= 1);
      if(!isFractional && isNumber && position <= this.values.length && position >= 1) {      
        this.values = [...this.values.slice(0,position-1),...this.values.slice(position)];
    } else {
        this.values = [];
        throw new Error("You cannot delete an invalid link!");
    }
      return this;
  },
    reverseChain() {
      this.values = this.values.reverse();
      return this;
  },
    finishChain() {
      let str = '';
      this.values.forEach((value,i,arr) => {
        if(i == 0 && i != arr.length - 1) {
          str = str + `( ${value} )`;
        } else if(i == 0 && i == arr.length - 1) {
          str = str + `( ${value} )`;
          this.values = [];
        } else if(i == arr.length - 1) {
          str = str + `~~( ${value} )`;
          this.values = [];
        } else {
          str = str + `~~( ${value} )`;
        }
      });
//         console.log(str)
       return str;
   }
  };

module.exports = {
  chainMaker
};
