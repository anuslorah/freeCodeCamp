function truncateString(str, num) {
 if (num > 3) {
    if (str.length > num) {
       str = str.slice(0, num-3) + "...";
       return str;
     } else  if (str.length <= num) {
       return str;
     }
   } else if (num <= 3) {
     str = str.slice(0, num) + "...";
     return str;
   }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11); //should return "A-tisket...".
truncateString("Peter Piper picked a peck of pickled peppers", 14); //should return "Peter Piper...".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length); 
//should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2); 
//should return "A-tisket a-tasket A green and yellow basket".
truncateString("A-", 1); //should return "A...".
truncateString("Absolutely Longer", 2); //should return "Ab...".
