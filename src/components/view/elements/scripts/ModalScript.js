import $ from 'jquery';

$('.ToggleModal').click(function(){
  $(this).removeClass("Modal");
  $(this).addClass("ModalFix");
});
