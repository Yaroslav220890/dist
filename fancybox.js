$(document).ready(function () {
  $("[data-fancybox]").fancybox({
    afterShow: function () {
      $(".hidden").hide();
    },
  });
});
