function bouncer(arr) {
  const val2 = [false, null, 0, "", undefined, NaN];
  let newArr = arr.filter(val => !val2.includes(val));
  return newArr;  
/* 
 baased on arrow function:
  let arr1 = [1,2,3,4],
  let arr2 = [2,4],
  let filtered = arr1.filter(f => !arr2.includes(f));
  console.log(filtered);
*/
}

bouncer([7, "ate", "", false, 9]); //should return [7, "ate", 9].
bouncer(["a", "b", "c"]); //should return ["a", "b", "c"].
bouncer([false, null, 0, NaN, undefined, ""]); //should return [].
bouncer([1, null, NaN, 2, undefined]); //should return [1, 2].