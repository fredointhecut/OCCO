// Show more members

$(document).ready(function () {
  $("#btn1").on('click', function () {
    $(".member").removeClass("member-hidden")
  });
});

// Delete button after click

$(".member-button").on('click', function () {
  $(".member").addClass("member-after");
  $(this).remove();
});







// Show more brands

$(document).ready(function () {
  $("#btn2").on('click', function () {
    $(".brand-item").removeClass("brand-hidden")
  });
});

// Remove brand button after click

$(".brand-button").on('click', function () {
  $(this).remove();
});
