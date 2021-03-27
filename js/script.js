$(document).ready(function() {
	var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'];
	$('<img class="fade-in" src="img/' + images[Math.floor(Math.random() * images.length)] + '">').appendTo('.pic');

});

function myFunction() {

  var input, filter, ul, li, a, i;
  input = document.getElementById("search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myList");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

$('#prev').click(function() {

    $(".gallery div").animate({left: "+=350"},1000);

    $(".gallery div").animate({left: "-=350"},1000);
});

$('#next').click(function() {

    $(".gallery div").animate({right: "+=350"},1000);

    $(".gallery div").animate({right: "-=350"},1000);
});

$(function() {
    $('.serving').bind('keyup', function(event) {
        var previousValue = parseFloat($("#previousServing").val());
        var newValue = parseFloat($(event.target).val());
        if (previousValue && newValue) {
            $('.ingredient').each(function(index, elem) {
                var ingredientNow = $('.amount', elem);
                var oldIngredientAmount = ingredientNow.text();
                var newIngredientAmount = oldIngredientAmount * newValue / previousValue;
                ingredientNow.text(newIngredientAmount);
            });
            $('#previousServing').val(newValue);
        }
    });
});




