$(function(){
    $(".jqueryToggle").click(function(){
      $(".contBorder").toggle("display");
      $("#imgCat").toggleClass('flip');
      $(".catBold").toggleClass('colNotBold');
  });
  $(".jqueryToggle2").click(function(){
    $(".contBorder2").toggle("display");
    $("#imgCat2").toggleClass('flip');

});
});
