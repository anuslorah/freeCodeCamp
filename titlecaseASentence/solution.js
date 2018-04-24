function titleCase(str) {
   str = str.toLowerCase();
    str = str.replace(/(^|\s)[a-z]/g, function(letter) {
      return letter.toUpperCase();
    });
   return str;
}

titleCase("I'm a little tea pot"); //should return a string.
titleCase("I'm a little tea pot"); //should return "I'm A Little Tea Pot".
titleCase("sHoRt AnD sToUt"); //should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); //should return "Here Is My Handle Here Is My Spout".