var itemHeight = $('.item').width(); 


$('.item').each(function(){

	$(this).css('height',itemHeight);
});




$(window).ready(function() {
	$('#wrap').fadeIn(1000); /*fadeIn rate in milliseconds. A higher number = slower fadeIn*/
	$('.title-main').css({
    "webkitTransform":"skewY(-6deg)",
    "MozTransform":"skewY(-6deg)",
    "msTransform":"skewY(-6deg)",
    "OTransform":"skewY(-6deg)",
    "transform":"skewY(-6deg)"
  });
  $('.title-circle').css({
    "webkitTransform":"rotate(10deg)",
    "MozTransform":"rotate(10deg)",
    "msTransform":"rotate(10deg)",
    "OTransform":"rotate(10deg)",
    "transform":"rotate(10deg)"
  });

  $('.popup').each(function(i){
    var append = '<a class="close-reveal-modal">x</a>';

    var text = $($('.item-type')[i]).children('h6')[0].textContent;
    
    append += '<h6 style="font-family:\'Montserrat\', \'sans-serif\';">' + text + '</h6>';   
    
    $(this).append(append);

    // $('.item .item-type')[i].append()
  })
   // $('.title-circle').addClass('animated fadeInDown');
  // $('.title-circle').css({
  //   "webkitTransform":"rotate(10deg)",
  //   "MozTransform":"rotate(10deg)",
  //   "msTransform":"rotate(10deg)",
  //   "OTransform":"rotate(10deg)",
  //   "transform":"rotate(10deg)"
  // });
  // setTimeout(function(){
  // 	$('.title-circle h4').css('opacity', '1');
  // }, 1000);
  
  // $('.title-main').css('transform','skewY(-6deg)');

});
