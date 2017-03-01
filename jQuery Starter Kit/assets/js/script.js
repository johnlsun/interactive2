$('.go').click(function() {
    $('.announcement').toggle();
});

$('.red-circle').mouseenter(function() {
     $('.blue-square').fadeOut();
});

$('.red-circle').mouseleave(function() {
     $('.blue-square').fadeIn();
});

$('button').click(function() {
  $('p').toggle();
});