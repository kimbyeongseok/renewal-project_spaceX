$(document).ready(function () {
  // sub page stats counting animation function
  var section = document.querySelector("#second");
  var hasEntered = false;

  window.addEventListener("scroll", (e) => {
    var shouldAnimate =
      window.scrollY + window.innerHeight >= section.offsetTop;

    if (shouldAnimate && !hasEntered) {
      hasEntered = true;

      $(".count").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 1500,
              easing: "swing",
              step: function (now) {
                $(this).text(Math.ceil(now));
              },
            }
          );
      });
    }
  });
  // sub page section moving function
  $("#intro").parallax("50%", 0.1);
  $("#second").parallax("50%", 0.3);
  $(".reveal_left").parallax("50%", 0.4);
  $("#third").parallax("50%", 0.3);

  //sub page  slide section  appear function
  $("#slide").hide(); //hide your div initially
  $(window).scroll(function () {
    if (
      $("#slide").scrollTop() + $("#slide").height() <=
      $(window).height() + $(window).scrollTop()
    ) {
      $("#slide").show();
    } else {
      $("#slide").hide();
    }
  });
});
