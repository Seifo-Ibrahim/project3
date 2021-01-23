//adjust slider height
$(function () {
  "use strict";
  var winH = $(window).height(),
    upperH = $(".upperbar").innerHeight(),
    navH = $(".navbar").innerHeight();

  $(".slider,.carousel-item").height(winH - (upperH + navH));

  //shufell Image
  $(".featured-content ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    if ($(this).data("class") === "all") {
      $(".featured-content2 .col-sm-6").css("opacity", 1);
    } else {
      $(".featured-content2 .col-sm-6").css("opacity", 0.07);
      $($(this).data("class")).parent().css("opacity", 1);
    }
  });
//active - links
  $('.nav-item').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  });
  var scroll = new SmoothScroll('a[href*="#"]');
});

