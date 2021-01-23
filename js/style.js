$(document).ready(function() {


   $(".calculator").fadeOut();
   $(".calculator-btn").click(function() {
      $(".calculator-btn").toggleClass("active-btn");
      $(".calculator").fadeToggle();
   });


   $(".dropdown-profile").slideUp()
   $("#topHeader .profile").click(function(){
      $(".dropdown-notification").slideUp();
      $(".dropdown-profile").slideToggle();
   });

   $(".dropdown-notification").slideUp()
   $("#topHeader .notification-area").click(function(){
      $(".dropdown-profile").slideUp();
      $(".dropdown-notification").slideToggle();
   });


   $("#sidenav .list-item > a").click(function(){
      $("#sidenav .list-item > a").removeClass("active");
      $(this).addClass("active");
   });

   $(".datepicker, .datepicker2").datepicker({
      dateFormat: "dd-mm-yy"
   });


   $("#mainSection .show-on-mob .btn").click(function() {
      $("#mainSection .show-on-mob .btn").removeClass("active-btn");
      $(this).addClass("active-btn");
   });

   $(".side-indicator .btn").click(function() {
      $(".side-indicator .btn").removeClass("active-btn");
      $(this).addClass("active-btn");
   });

   $(".item-area .mob-btns .btn").click(function() {
      $(".item-area .mob-btns .btn").removeClass("active-btn");
      $(this).addClass("active-btn");
   });


   $(".mob-btns .btn").click(function() {
      $(".accesories .side-indicator").toggleClass("active");
      $(".item-area .col-6").toggleClass("full-width-col");
   });

   $(".delme").click(function() {
      $(this).parents(".table-row").toggle();
   });


   $('#editable-select, #editable-select2').editableSelect({
   	effects: 'slide',
   	duration: 200
   });

});
