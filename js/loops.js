var limit=300, // Max number of stars
body=document.body;
loop={
 //initilizeing
 start:function(){
  for (var i=0; i <= limit; i++) {
   var star=this.newStar();
   star.style.top=this.rand()*550+"%";
   star.style.left=this.rand()*95+"%";
   body.appendChild(star);
  };
 },
 //to get random number
 rand:function(){
  return Math.random();
 },
 //createing html dom for star
 newStar:function(){
  var d = document.createElement('div');
  d.innerHTML = '<figure class="star"><figure class="star-top"></figure><figure class="star-bottom"></figure></figure>';
   return d.firstChild;
 },
};
loop.start();