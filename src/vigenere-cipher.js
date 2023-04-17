const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */


class VigenereCipheringMachine {
  constructor(isTrue = true) {  
  this.bool = isTrue;  
  this.en = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  }
  makeFullKey(message, key) {
    let fullKey = '';
    if(key.length < message.length) {
      let counter = message.split('').reduce((count,item) => {
        if(this.en.includes(item.toUpperCase())) {
          return count + 1
        }
        return count;
      },0);
      let fullLengthX = Math.floor(counter/key.length);
      let lastPart = counter - key.length*fullLengthX;
      for(let i = 1; i <= fullLengthX; i++) {
        fullKey = fullKey + key;
      }
      for(let j = 0; j < lastPart; j++) {
        fullKey = fullKey + key[j]
      }
    } else {
      fullKey = key;
    }
    return fullKey;
  }
  makeFinishArray(message, fullKey, decrypt = 0) {
    let arrayMessage = message.toUpperCase().split('');
    let arrayFullKey = fullKey.toUpperCase().split('');
     
    if(decrypt === 'decrypt') {
      return (arrayMessage.map((item,i) => {
        if((this.en).includes(item)) {              
          let cryptoLtr = this.en[Math.abs((this.en).lastIndexOf(arrayMessage[i]) - (this.en).findIndex(ltr => ltr == arrayFullKey[0]))]
          arrayFullKey.splice(0,1);
          return cryptoLtr;
        } else {
          return item;
        }
      }))
    } else {
      return (arrayMessage.map((item,i) => {
        if((this.en).includes(item)) {
          
          let cryptoLtr = this.en[(this.en).findIndex(ltr => ltr == arrayMessage[i]) + (this.en).findIndex(ltr => ltr == arrayFullKey[0])]
          
         
          return cryptoLtr;
        } else {
          return item;
        }
      }))
    };
  }
  encrypt(message, key) {
    if(!message || !key) throw new Error("Incorrect arguments!")    
   
    let fullKey = this.makeFullKey(message,key)
   
    let finishArray = this.makeFinishArray(message,fullKey);
    if(this.bool) {
      return finishArray.join('');
    } else {
      return finishArray.reverse().join('')
    }
  }
  decrypt(encryptedMessage, key) {
    if(!encryptedMessage || !key) throw new Error("Incorrect arguments!")

    let fullKey = this.makeFullKey(encryptedMessage,key)
  
    let finishArray = this.makeFinishArray(encryptedMessage,fullKey,'decrypt');
    if(this.bool) {
      return finishArray.join('')
    } else {
      return finishArray.reverse().join('')
    }
  }
}

module.exports = {
  VigenereCipheringMachine,
};
