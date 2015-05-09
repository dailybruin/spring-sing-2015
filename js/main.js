// $( function() {
  
//   $('.isotope').isotope({
//     itemSelector: '.item',
//     masonry: {
//       columnWidth: 100,
//       gutter: 10
//     }
//   });

// });

var itemHeight = $('.item').width(); 


$('.item').each(function(id){

	$(this).css('height',itemHeight);
});


$(window).load(function(){
	$('img.bgfade').hide();
	var dg_H = $("header").height();
	var dg_W = $("header").width();
	$('#wrap').css({'height':dg_H,'width':dg_W, 'padding': '22px 0' });
	function anim() {
	    $("#wrap img.bgfade").first().appendTo('#wrap').fadeOut(5000);
	    $("#wrap img").first().fadeIn(5000);
	    setTimeout(anim, 10000);
	}
	anim();


})
$(window).resize(function(){window.location.href=window.location.href})


