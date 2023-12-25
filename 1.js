function uniqueCharacter(str) {
  let setOfChars = new Set(str);
  let result = "";

  for (let char of setOfChars) {
    if (str.split(char).length - 1 <= 2) {
      result += char;
    }
  }

  return result;
}

console.log(uniqueCharacter("thequickbrownfoxjumpsoverthelazydog"));
