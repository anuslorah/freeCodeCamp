function destroyer(arr) {
  // Remove all the values
  var args = arr.slice.call(arguments); // same as var args = Array.prototype.slice.call(arguments);

  let arr1 = arr.filter(val => !args.includes(val));
  return arr1;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); //should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); //should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5); //should return [1].
destroyer([2, 3, 2, 3], 2, 3); //should return [].
destroyer(["tree", "hamburger", 53], "tree", 53); //should return ["hamburger"]