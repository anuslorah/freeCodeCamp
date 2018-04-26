 /*
function keyQuote(key) {
  let key = $("input:text").val().toLowerCase();
  let keyQuotes = [];
  for (let i = 0; i < quotes.length; i++) {
    if (quotes[i].match(key)) {
      keyQuotes.push(quotes[i]);
    }
  }
}    
*/
var quotes = [
  "This does not have to be done overnight, just one small change at a time",
  "Start to change how I see myself. I am strong and one step at a time I start to believe it",
  "Keep things simple right now. No big decisions. No word of the year. Just doing the next thing, trying to do it well. That's my plan"
];

var randQuote = quotes[Math.floor(Math.random() * quotes.length+1)];

$(document).ready(function() {
    $("#getquote").on("click", function(){
      if ($("input:text").val() != ""){ //if there's input, search for quote with given string
        $(".quote").html($("input:text").val());
      } else { //if there's no input give a true random
        $(".quote").html(randQuote);  
        //alert("moo");
      }
    });
});