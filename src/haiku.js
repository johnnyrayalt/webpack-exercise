export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  isHaiku() {
    let haiku = [this.line1.split(" "), this.line2.split(" "), this.line3.split(" ")];
    //[["this", "is",..],[...],[...]]
    for(let i=0; i<haiku.length; i++){
      let syllableSum = 0;
      let lineArray = haiku[i];
      lineArray.forEach(function(word) {
        syllableSum += getNumVowels(word);
      });
      if ((i === 0 && syllableSum !== 5) || (i === 1 && syllableSum !== 7) || (i === 2 && syllableSum !== 5)){
        return false;
      }
    }
    return true;
  };
}

export function getNumVowels(input) {
  let vowels = input.replace(/[^aeiou]|e$|es$|e's$|[aeiou](?=[aeiou])/gi,'');
  return vowels.length;
}





//   let length1 = this.line1.split(" ").length;
//   let length2 = this.line2.split(" ").length;
//   let length3 = this.line3.split(" ").length;
//   if (length1 === 5 && length2 === 7 && length3 === 5) {
//     return true;
//   } else {
//     return false;
//   }
// }
