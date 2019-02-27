
updateStyle = function(){
  console.log('resizing');
  if ($(document).width() < 640){
    $('.menu-logo').css('display', 'none');
    $('.top-bar').css('top', 40);
    $('.firstPageElement').css('padding-top', 40);
  } else{
    $('.menu-logo').css('display', 'block');
    $('.top-bar').css('top', 0);
    $('.firstPageElement').css('padding-top', 100);
  }
  
  if ($('body').height() < $(window).height()){
    $('.footer').css('position', 'absolute');
    $('.footer').css('bottom', 0);
  } else{
    $('.footer').css('position', 'static');
  }

}



updateStyle()

$(window).resize(updateStyle);
