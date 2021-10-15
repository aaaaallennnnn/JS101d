function shortLongShort(str1, str2) {
  let choose = str1.length > str2.length;
  if (choose) {
    return str2 + str1 + str2;
  } else {
    return str1 + str2 + str1;
  }
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"