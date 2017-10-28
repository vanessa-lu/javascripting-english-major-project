$("#prologue").html("<p>The text of the Prologue will go here.</p>");
$("#glosses").html("<p>The glosses will go here.</p>");
let line1, line1Text; // don’t need the intermediate step of line1TextArray
line1 = [{text: "Whan"}, {text: "that"}, {text: "Aprill,"}, {text: "with"},
        {text: "his"}, {text: "shoures"}, {text: "soote"}];
line1Text = line1.map(function(word){
  return word.text;
}).join(" ");
$("#prologue").html("<p>" + line1Text + "<br /></p>");
// <br /> makes a line break, which will come in handy when we have many
// lines.
