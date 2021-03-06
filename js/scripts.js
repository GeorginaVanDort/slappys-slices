function PizzaOrder(size) {
  this.size = size;
  this.protein = [];
  this.veg = [];
  this.special = [];
  this.totalPrice = 0;
}

PizzaOrder.prototype.price = function () {
  return this.size + (this.protein.length * 2) + (this.veg.length * 1) + (this.special.length * 3);
}



$(document).ready(function() {
  $("#addProtein").click(function() {
    $("#protein2").show();
  });

  $("form#newPizza").submit(function(event) {
    event.preventDefault();

    var size = parseInt($('#size input:radio:checked').val());

    var protein1 = $("#protein1").val();
    var protein2 = $("#protein2").val();
    var veg = $("#veg").val();
    var special = $("#special").val();

    var newPizza = new PizzaOrder(size);

    if (protein1 !== "None") {
      newPizza.protein.push(protein1);
    }
    if (protein2 !== "None") {
      newPizza.protein.push(protein2);
    }
    if (veg !== "None") {
      newPizza.veg.push(veg);
    }
    if (special !== "None") {
      newPizza.special.push(special);
    }

    $("#total").text(newPizza.price());

  })

})
