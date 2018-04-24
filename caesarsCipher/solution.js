function rot13(str) { // LBH QVQ VG!
  const cipher = 13;
  const alph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 
  let temp;
  let newStr = "";
  let letters = /^[A-Z]+$/;
  for (let i = 0; i < str.length; i++) {
  
    temp = str.charAt(i);
    if(temp.match(letters)) {

      temp = alph.indexOf(temp);
      temp = temp + cipher;
      if (temp >= 26) {
        temp = temp - 26;
      }
      newStr = newStr + alph[temp];

    } else {
      newStr = newStr + str.charAt(i);
    } 
  }
  return newStr;
}

rot13("SERR PBQR PNZC"); //should decode to "FREE CODE CAMP"
rot13("SERR CVMMN!"); //should decode to "FREE PIZZA!"
rot13("SERR YBIR?"); //should decode to "FREE LOVE?"
rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."); //should decode to "THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX."