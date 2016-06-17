function PizzaOrder(size) {
  this.size = size;
  this.protein = [];
  this.veg = [];
  this.special = [];
}

PizzaOrder.prototype.protein = function(protein) {
  this.protein.push(protein);
}

PizzaOrder.prototype.price = function () {
  return this.size + (this.protein.length * 2);
}



$(document).ready(function() {
  $("form#newPizza").submit(function(event) {
    event.preventDefault();

    var size = parseInt($('#size input:radio:checked').val());
    var protein = $("#protein1").val();
    var veg = $("#veg").val();
    var special = $("#special").val();

    var newPizza = new PizzaOrder(size);
    newPizza.protein.push(protein);
    newPizza.veg.push(veg);
    newPizza.special.push(special);

    $("#total").text(newPizza.price());

  })

})












  // var newPizza = new PizzaOrder(size);
// // debugger;
//   $(".protein").change(function() {
//     var protein = $(this).val();
//     alert(protein);
//     // newPizza.protein.push(protein);
//   })
// var protein = $("#protein").val();
// var veg = $("#veg").val();
// var special = $("#special").val();
//
// var pizza = new PizzaOrder(size,);
//
// pizza.protein.push(protein);
