// Show more members

$(document).ready(function () {
  $("#button1-image").on('click', function () {
    $(".member").removeClass("member-hidden")
  });
});

// Delete button after click

$("#button1-image").on('click', function () {
  $(".member").addClass("member-after");
  $('.member-button').remove();
});







// Show more brands

$(document).ready(function () {
  $("#button2-image").on('click', function () {
    $(".brand-item").removeClass("brand-hidden")
  });
});

// Remove brand button after click

$("#button2-image").on('click', function () {
  $(".brand-button").remove();
});
