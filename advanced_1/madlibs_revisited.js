/**
 * I was too lazy to spend a minute thinking of words to populate the list,
 * so I spent many, many multiples of that to automatically populate the list
 * using a dictionary.
 * 
 * I used the JSON dictionary database graciously provided by eddydn at
 * https://github.com/eddydn/DictionaryDatabase
 * 
 * I don't know how to conjugate the verbs automatically, so a lot of
 * tenses/spellings will be strange at best.
 * 
 * I also learned that there are many, many words that I have never seen before.
 */

const DICT = require('./EDMTDictionary.json');
const WORDCOUNT = DICT.length;

let words = {
  noun: [], 
  adjective: [], 
  verb: [], 
  adverb: []
}

// get random word from dictionary
function randomWord() {
  let wIndex = Math.floor(Math.random() * WORDCOUNT);
  return DICT[wIndex];
}

// populate word types
function populate() {
  while(words.noun.length < 5 ||
    words.adjective.length < 5 ||
    words.verb.length < 5 ||
    words.adverb.length < 5) {
      let temp = randomWord();
      switch(temp['type']){
        case "(n.)":
          words.noun.push(temp['word'].toLowerCase());
          break;
        case "(v.)":
          words.verb.push(temp['word'].toLowerCase());
          break;
        case "(a.)":
          words.adjective.push(temp['word'].toLowerCase());
          break;
        case "(adv.)":
          words.adverb.push(temp['word'].toLowerCase());
        default:
          break;
      }
    }
}

function madlibs(template){
  const sample = (type) => {
    let partOfSpeech;
    switch(Number(type)) {
      case 1:
        partOfSpeech = "noun";
        break;
      case 2:
        partOfSpeech = "adjective";
        break;
      case 3:
        partOfSpeech = "verb";
        break;
      case 4:
        partOfSpeech = "adverb";
      default:
        break;
    }
    const wordCount = words[partOfSpeech].length;
    const wordIndex = [Math.floor(Math.random() * wordCount)];
    return words[partOfSpeech][wordIndex];
  }
  return template.replace(/(\d+)/g, sample);
}

const template1 = 
`The "2" brown "1" "4"
"3s" the "2" yellow
"1", who "4" "3s" his
"1" and looks around.\n`

const template2 = `The "1" "3s" the "1's" "1".\n`;

populate();

console.log(madlibs(template1));
/**
 * The "tessellated" brown "skain" "magnificently"
 * "chases" the "dissident" yellow
 * "electromotor", who "woundily" "discounts" his
 * "metapodiale" and looks around.
 */

console.log(madlibs(template1));
/**
 * The "exoskeletal" brown "epicardium" "flatly"
 * "discounts" the "utica" yellow
 * "staple", who "transcendentally" "rises" his
 * "matamata" and looks around.
 */

console.log(madlibs(template2));
// The "boule" "reenforces" the "sodality's" "beemaster".

console.log(madlibs(template2));
// The "surrender" "rises" the "heddle's" "pilled-garlic".