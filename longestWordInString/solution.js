function findLongestWord(str) {
  var arr1 = str.split(" ");
  var arr2 = [];
  
  for (var i=0; i<arr1.length; i++) {
    arr2.push(arr1[i].length);
  }
  
  var s = Math.max(...arr2); 
  return s; 
}

findLongestWord("The quick brown fox jumped over the lazy dog"); //should return a number.
findLongestWord("The quick brown fox jumped over the lazy dog"); //should return 6.
findLongestWord("May the force be with you"); //should return 5.
findLongestWord("Google do a barrel roll"); //should return 6.
findLongestWord("What is the average airspeed velocity of an unladen swallow"); //should return 8.
findLongestWord("What if we try a super-long word such as otorhinolaryngology"); //should return 19.