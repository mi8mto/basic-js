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
    this.en = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
  }
  maketotalKey(message, key) {
    let totalKey = "";
    if (key.length < message.length) {
      let count = message.split("").reduce((count, item) => {
        if (this.en.includes(item.toUpperCase())) {
          return count + 1;
        }
        return count;
      }, 0);
      let fullLengthX = Math.floor(count / key.length);
      let lastPart = count - key.length * fullLengthX;
      for (let i = 1; i <= fullLengthX; i++) {
        totalKey = totalKey + key;
      }
      for (let j = 0; j < lastPart; j++) {
        totalKey = totalKey + key[j];
      }
    } else {
      totalKey = key;
    }
    return totalKey;
  }
  makeFinishArray(message, totalKey, decrypt = 0) {
    let arrayMessage = message.toUpperCase().split("");
    let arraytotalKey = totalKey.toUpperCase().split("");
    console.log(arraytotalKey, "array0");
    if (decrypt === "decrypt") {
      return arrayMessage.map((item, i) => {
        if (this.en.includes(item)) {
          let cryptoLtr =
            this.en[
              Math.abs(
                this.en.lastIndexOf(arrayMessage[i]) -
                  this.en.findIndex((ltr) => ltr == arraytotalKey[0])
              )
            ];
          arraytotalKey.splice(0, 1);
          return cryptoLtr;
        } else {
          return item;
        }
      });
    } else {
      return arrayMessage.map((item, i) => {
        if (this.en.includes(item)) {
          let cryptoLtr =
            this.en[
              this.en.findIndex((ltr) => ltr == arrayMessage[i]) +
                this.en.findIndex((ltr) => ltr == arraytotalKey[0])
            ];
          return cryptoLtr;
        } else {
          return item;
        }
      });
    }
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error("Incorrect arg!");
    let totalKey = this.maketotalKey(message, key);
    let finishArray = this.makeFinishArray(message, totalKey);
    if (this.bool) {
      return finishArray.join("");
    } else {
      return finishArray.reverse().join("");
    }
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error("Incorrect arg!");
    let totalKey = this.maketotalKey(encryptedMessage, key);
    let finishArray = this.makeFinishArray(
      encryptedMessage,
      totalKey,
      "decrypt"
    );
    if (this.bool) {
      return finishArray.join("");
    } else {
      return finishArray.reverse().join("");
    }
  }
}


module.exports = {
  VigenereCipheringMachine,
};
