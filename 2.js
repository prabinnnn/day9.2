function unique_characters(str) {
  let srt = str;
  let unique = "";
  for (let x = 0; x < srt.length; x++) {
    if (unique.indexOf(str.charAt(x)) === -1) {
      unique += str[x];
    }
  }
  return unique;
}

console.log(unique_characters("thequickbrownfoxjumpsoverthelazydog"));
