let myHabaneroSauceSquirts, myBurritoObject;
// First, define and assign a variable for how
// spicy the burrito is.
myHabaneroSauceSquirts = 3;
// Now assign the burrito object.
myBurritoObject = {
  tortilla: "wheat",
  guacamole: true,
  beans: "pinto",
  // Make use of the variable above.
  habaneroSauceSquirts: myHabaneroSauceSquirts,
  // Use the variable again in a function.
  spiciness: function(){
    if (myHabaneroSauceSquirts > 0 ){
      alert("This is a spicy burrito!");
    } else {
      alert("This is a mild burrito.");
    }
  }
};
$("#response").html("Your burrito has " +
  myBurritoObject.habaneroSauceSquirts +
  " squirts of habanero.");
myBurritoObject.spiciness();
