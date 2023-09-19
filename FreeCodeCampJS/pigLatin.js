/*Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.
*/
function translatePigLatin(str) {
  if (str[0].match(/[aeiou]/)) {
    return str + "way"
  } else {
    let consonantCluster = ""
    let index
    for (let i = 0; i < str.length; i++) {
      if (str[i].match(/[aeiou]/)) {
        index = i
        str = str.slice(index, str.length + 1) + consonantCluster + "ay"
        return str
      } else {
        consonantCluster = consonantCluster + str[i]
      }
    }
    return str + "ay"
  }
}

console.log(translatePigLatin("consonant"))
console.log(translatePigLatin("rhythm"))
