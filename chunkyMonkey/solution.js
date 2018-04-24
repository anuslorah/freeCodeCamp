function chunkArrayInGroups(arr, size) {
  var arr2 = [];
  var arr1 = arr;
  let g;
  for (var i = 0; i < arr.length; i++) {
    g = arr1.slice(0, size);
    if (g !=0) {
      arr2.push(g);
    }
    arr1 = arr1.slice(size, arr1.length);
  }
  return arr2;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2); //should return [["a", "b"], ["c", "d"]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3); //should return [[0, 1, 2], [3, 4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2); //should return [[0, 1], [2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4); //should return [[0, 1, 2, 3], [4, 5]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3); //should return [[0, 1, 2], [3, 4, 5], [6]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4); //should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2); //should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].