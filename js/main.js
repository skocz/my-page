$(document).ready(function(){
  $('.core-nav-item').click(function(){
    $(this).addClass('core-nav-item-active');
    $('.core-nav-item').not(this).removeClass('core-nav-item-active');
  });
});
