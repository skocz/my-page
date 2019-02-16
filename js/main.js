// CHANGE THE TEXT COLOR WHEN IT IS CLICKED
$(document).ready(function(){
  $('.menu-item').click(function(){
    $(this).addClass('core-nav-item-active');
    $('.menu-item').not(this).removeClass('core-nav-item-active');
  });


// MOBILE MENU

  let menu = $('#menu');
  let drawer = $('.core-nav-items');

  menu.on('click', function(){
    drawer.toggleClass('open-menu');
  });

});
