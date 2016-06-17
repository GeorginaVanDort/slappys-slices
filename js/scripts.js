function PizzaOrder(size) {
  this.size = size;
  this.protein = [];
  this.veg = [];
  this.special = [];
}

PizzaOrder.prototype.price = function () {
  return this.size + (this.protein.length * 2);
}



$(document).ready(function() {
  event.preventDefault();

  $("#size").change(function() {
    var size = parseInt($('#size input:radio:checked').val());
  })

  var newPizza = new PizzaOrder(size);

  $(".protein").change(function() {
    var protein = $(this).val();
    newPizza.protein.push(protein);
  })

  $("#total").text(newPizza.price());
})













// var protein = $("#protein").val();
// var veg = $("#veg").val();
// var special = $("#special").val();
//
// var pizza = new PizzaOrder(size,);
//
// pizza.protein.push(protein);
