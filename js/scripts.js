$(document).ready(function() {
  $("form#triangleForm").submit(function(event) {
    const number1 = parseInt($("input#number1").val());
    const number2 = parseInt($("input#number2").val());
    const number3 = parseInt($("input#number3").val());

    let totalSize = (number1 + number2 + number3)
    console.log(totalSize)
    if (totalSize != 180) {                               // Not a triangle
      alert('This is not a triangle');
    }
    else if(number1 === number2 === number3) {             // Equiliateral is all three equal
      console.log("Equilateral")
    }
    else if(number1 === number2 || number1 === number3) {             // Isosceles is two equal sides
      console.log("Isosceles")
    } else {                                              // Scalene has no equal sides
      console.log("Scalene")
    }
    event.preventDefault();
  });
});