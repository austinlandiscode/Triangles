$(document).ready(function() {
  $("form#shape").submit(function(event) {
    event.preventDefault();
    const side1 = parseInt($("#side1").val());
    const side2 = parseInt($("#side2").val());
    const side3 = parseInt($("#side3").val());
    
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
      $('#nottri').show();
    }
    else if (side1 === side2 && side2 === side3) {
      $('#equilateral').show();
    }
    else if (side1 === side2 || side1 === side3 || side2 === side3) {
      $('#isoceles').show();
    }
    else {
      $('#scalene').show();
    }
  });
});


// (side1 && side2 <= side3 || side1 && side3 <= side2 || side2 && side3 <= side1)
// (side1 !== side2 && side1 !== side3 && side2 !== side3)