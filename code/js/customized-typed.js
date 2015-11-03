var myQuotes =  new Array();
myQuotes.push("h2o-3");
myQuotes.push("baseqa");
myQuotes.push("quark");
myQuotes.push("ProbCog");
myQuotes.push("zxcvbn");
myQuotes.push("coq");
myQuotes.push("quark");
myQuotes.push("ynot");
myQuotes.push("odo");
myQuotes.push("z3");

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffle(myQuotes)

$(".intro-text-typed").typed({
              strings: myQuotes,
              typeSpeed: 15,
              backDelay: 5000,
              startDelay: 200,
              loop: true,
              loopCount: false,
              cursorChar: "_" //or "|"
            });


