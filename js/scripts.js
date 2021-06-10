$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});

$(document).ready(function() {
  $(".ocean").click(function() {
    $("#fade-in").fadeToggle();
  });
});

$(document).ready(function() {
  $(".purple").click(function() {
    $("#slide").slideToggle();
  });
});