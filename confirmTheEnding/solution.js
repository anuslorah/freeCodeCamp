function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  let i = target.length; 
  let substr = str.slice(str.length-i, str.length);
  if (substr === target) {
    return true;
  } else {
    return false;
  }
}

confirmEnding("Bastian", "n";) //should return true.
confirmEnding("Connor", "n"); //should return false.
confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification"); 
//should return false.
confirmEnding("He has to give me a new name", "name"); //should return true.
confirmEnding("Open sesame", "same"); //should return true.
confirmEnding("Open sesame", "pen"); //should return false.
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");
//should return false.