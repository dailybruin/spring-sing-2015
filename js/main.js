var itemHeight = $('.item').width(); 


$('.item').each(function(id){

	$(this).css('height',itemHeight);
});



 $(window).ready(function() {
$('#wrap').fadeIn(3700); /*fadeIn rate in milliseconds. A higher number = slower fadeIn*/
});
