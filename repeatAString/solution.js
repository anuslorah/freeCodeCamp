function repeatStringNumTimes(str, num) {
  // repeat after me
  var str1 = str;
  if (num > 0) {
    for (var i = 1; i<num; i++) {
      str1 = str1 + str;
    }
    return str1;

  } else {
    str = "";
    return str;
  }
}

repeatStringNumTimes("*", 3); //should return "***".
repeatStringNumTimes("abc", 3); //should return "abcabcabc".
repeatStringNumTimes("abc", 4); //should return "abcabcabcabc".
repeatStringNumTimes("abc", 1); //should return "abc".
repeatStringNumTimes("*", 8); //should return "********".
repeatStringNumTimes("abc", -2); //should return "".