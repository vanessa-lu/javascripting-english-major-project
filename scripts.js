let tipCalculator;
tipCalculator = function(total, tipRate){
  // step 1:
  let tipAmount;
  tipAmount = tipRate * total;
  // and step 2:
  $("#response").html("Your tip is $" + tipAmount);
}

// Now call (or “execute”) the function, passing a
// total of $50.00 and a tipRate of 20%:

tipCalculator(50.00, 0.2);
