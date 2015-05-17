

//////////deep linking stuff/////////////
  
 $(document).ready(function(){

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


  var $thumbs = $(".item");
  var $btns = $(".btn").on("click", function() {
    
    var active = 
      $btns.removeClass("active")
        .filter(this)
        .addClass("active")
        .data("filter");
    
    $thumbs
      .hide()
      .filter( "." + active )
      .fadeIn(450);

  });

  var mainURL="./index.html"

  //parse url and open the correct modal
  var hash=window.location.hash;
  $(hash).foundation('reveal','open');

  //change url to mainURL#modal when a modal is opened
  $(document).on('open.fndtn.reveal', '[data-reveal]', function () {
    var modal = $(this);
    location.replace(mainURL+'#'+modal[0].id);

  });
/*
 $(document).on('opened.fndtn.reveal', '[data-reveal]', function () {
    
  var h=$('iframe').width()/560*315;
  $('iframe').css({
    "height":h
  })
  
  console.log($('iframe').width());

  });*/



  //change url back to mainURL when a modal is closed
  $(document).on('closed.fndtn.reveal', '[data-reveal]', function () {
    var modal = $(this);
    var state = { "canBeAnything": true};
    history.pushState(state, document.title, mainURL);
  });

 });
//////////////////////////////////////////

var itemHeight = $('.item').width(); 


$('.item').each(function(){
	$(this).css('height',itemHeight);
});




$(window).ready(function() {

/*fadeIn rate in milliseconds. A higher number = slower fadeIn*/

	
  $('.popup').each(function(i){
    var append = '<a class="close-reveal-modal">x</a>';

    var artist = $($('.item-name')[i]).children('h1')[0];
    if(artist==undefined) { return false;}
    var artistName = artist.textContent;
    append += '<h1 style="font-family:\'Lora\', \'sserif\'; text-align: center;">' + artistName + '</h1>';  

    var type = $($('.item-type')[i]).children('h6')[0].textContent;
    
    append += '<h6 style="font-family:\'Montserrat\', \'sans-serif\'; text-align: center;">' + type + '</h6>';  
    append+='<div id="share-buttons">'
    append+='<a href = '+'"'+'http://www.facebook.com/sharer.php?u='+document.URL+'"'+'class='+'"'+'fb-share-button'+'"'+'><img src="img/fb-share.png"></a>';
    append+='<a href="https://twitter.com/share" class="twitter-share-button" data-count="none">Tweet</a>';
    append+='</div>'

    $(this).prepend(append);

    // $('.item .item-type')[i].append()
  });


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

setTimeout(function(){ 
  $('.s-header .s-title .s-story').css('padding', '20px');  
  $('.storify iframe').css({
    'max-width' : '100%', 
    'width' : '100%'
  });

}, 5000); 


