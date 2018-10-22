import $ from 'jquery';

$(document).ready(function () {
  $("input").prop("disabled", true);
  $(".Item")
    .click(function () {
      $("input").prop("disabled", false);
      $(".containerHidden").css("display", "block");
        });
});
$(document).ready(function () {
    //
  $(".ClientTable input").prop("disabled", true);
  $(".DealerTable input").prop("disabled", true);
  $(".ProductRmaTable input").prop("disabled", true);
  //
  $(".EditCustomer").click(function () {
    $(".ClientTable input").prop("disabled", false);
    $(".DealerTable .AutoSearchDealer input").prop("disabled", false);
    $(".AutoSearchDealer").css("display", "block");
    $(".TableOptions").css("display", "block");
    $(".Cancel").css("display", "block");
  });
  //
  $(".Cancel").click(function () {
    $(".ClientTable input").prop("disabled", true);
    $(".AutoSearchDealer").css("display", "none");
    $(".TableOptions").css("display", "none");
    $(".Cancel").css("display", "none");
  });
  //
});
