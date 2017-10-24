let turtlesWithSplinter, turtlesWithoutSplinter, reversedTurtlesWithoutSplinter;
turtlesWithSplinter = ["Leonardo", "Donatello", "Raphael", "Michelangelo", "Splinter"];
// oops. let's pop() Splinter off before reversing…
turtlesWithoutSplinter = turtlesWithSplinter.pop();
console.log(turtlesWithoutSplinter);
//--> Splinter
//reversedTurtlesWithoutSplinter = turtlesWithSplinter.pop().reverse();
//$("#response").html(reversedTurtlesWithoutSplinter);;
