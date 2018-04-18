import { Haiku } from "./../src/haiku.js";
import { getNumVowels } from "./../src/haiku.js";


describe('Haiku', function() {
  var reusableHaiku;

  beforeEach(function() {
    reusableHaiku = new Haiku(5,7,5);
  });

  it('should check to see if the first line is 5 words', function() {
    expect(reusableHaiku.line1).toEqual(5);
  });

  it('should check to see if the second line is 7 words', function() {
    expect(reusableHaiku.line2).toEqual(7);
  });

  it('should check to see if the third line is 5 words', function() {
    expect(reusableHaiku.line3).toEqual(5);
  });


  it('should check if the Haiku object is a haiku', function() {
    let wordHaiku = new Haiku('Hearts represent love','Love is a beautiful thing',"Valentine's Day love");
    expect(wordHaiku.isHaiku()).toBeTruthy();
  });
});

describe('getNumVowels', function() {

  it('should return the number of vowels in a word', function() {
    expect(getNumVowels("blah")).toEqual(1);
  });

  it('should return the number of vowels in a word', function() {
    expect(getNumVowels("aardvark")).toEqual(2);
  });

  it('should return the number of vowels in a word', function() {
    expect(getNumVowels("orange")).toEqual(2);
  });

  it('should return the number of vowels in a word', function() {
    expect(getNumVowels("beautifule")).toEqual(3);
  });

  it('should return the number of vowels in a word', function() {
    expect(getNumVowels("refridgerator")).toEqual(5);
  });

  // it('should return the number of vowels in a word', function() {
  //   expect(getNumVowels("yappy")).toEqual(2);
  // });
});
