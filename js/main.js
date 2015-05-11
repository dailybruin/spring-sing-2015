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
    "webkitTransform":"rotate(8deg)",
    "MozTransform":"rotate(8deg)",
    "msTransform":"rotate(8deg)",
    "OTransform":"rotate(8deg)",
    "transform":"rotate(8deg)"
  });

  $('.popup').each(function(i){
    var append = '<a class="close-reveal-modal">x</a>';

    var artist = $($('.item-name')[i]).children('h1')[0].textContent;
    append += '<h1 style="font-family:\'Lora\', \'sserif\'; text-align: center;">' + artist + '</h1>';  

    var type = $($('.item-type')[i]).children('h6')[0].textContent;
    
    append += '<h6 style="font-family:\'Montserrat\', \'sans-serif\'; text-align: center;">' + type + '</h6>';  

    var bg = $(".item")[i];
    bg = $(bg).css("background-image");
    bg = bg.replace(/.*\s?url\([\'\"]?/, '').replace(/[\'\"]?\).*/, '') 



    

    append += '<img src="' + bg + '" style="width: 100%; height: auto;"/>';
    
    $(this).prepend(append);

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
