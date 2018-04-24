function mutation(arr) {
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();

  let arr1 = arr[0].split("");
  let arr2 = arr[1].split("");  
  for (var i=0; i < arr1.length; i++) {
    for (var j=0; j < arr2.length; j++) {
      if (!arr1.includes(arr2[j])) {
         return false;
      }  
    }
    return true;    
  }
}

mutation(["hello", "hey"]); //should return false.
mutation(["hello", "Hello"]); //should return true.
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); //should return true.
mutation(["Mary", "Army"]); //should return true.
mutation(["Mary", "Aarmy"]); //should return true.
mutation(["Alien", "line"]); //should return true.
mutation(["floor", "for"]); //should return true.
mutation(["hello", "neo"]); //should return false.
mutation(["voodoo", "no"]); //should return false.