$(document).ready(function(){
  $("#theForm").submit(function() {
    debugger;
    event.preventDefault();
    $(".result").empty();
    var number1 = parseFloat($("input#number1").val());
    var number2 = parseFloat($("input#number2").val());
    for (var i = 0; i <= number1; i += number2) {
      console.log(i);
      $(".result").append(i + "<br>");
    }
  })
})
