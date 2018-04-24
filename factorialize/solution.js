function factorialize(num) {
  if (num === 0) {
    num = 1;
    return num;
  } else {
    for (var i = num-1; i>1; i--) {
      num = num*i;
    }
    return num;
  }
}

factorialize(5); //should return a number.
factorialize(5); //should return 120.
factorialize(10); //should return 3628800.
factorialize(20); //should return 2432902008176640000.
factorialize(0); //should return 1.