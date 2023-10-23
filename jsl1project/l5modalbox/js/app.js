var getmodal = document.getElementById('signupmodal');
var getbtnsignup = document.getElementById('btn-signup');
var getbtnopenfullscreen = document.getElementById('btn-openfullscreen');
var getbtnclosefullscreen = document.getElementById('btn-closefullscreen');
var getbtnclose = document.querySelector('.btn-close');

getbtnsignup.addEventListener('click',function(){
   getmodal.style.display = 'block';
});

getbtnclose.addEventListener('click',function(){
   getmodal.style.display = 'none';
});

window.onclick = function(e){
   // console.log(e.target);

   if(e.target === getmodal){
      getmodal.style.display = 'none';
   }
}

var getde = document.documentElement;
   // console.log(getde);

getbtnopenfullscreen.addEventListener('click',function(){
   if(getde.requestFullscreen){
      getde.requestFullscreen();
   }else if(getde.msRequestFullscreen){
      getde.msRequestFullscreen();
   }else if(getde.webkitRequestFullscreen){
      getmodal.webkitRequestFullscreen();
   }
   getbtnclosefullscreen.style.display = 'inline-block';
});

getbtnclosefullscreen.addEventListener('click',function(){
   if(document.exitFullscreen){
      document.exitFullscreen();
   }else if(document.msExitFullscreen){
      document.msExitFullscreen();
   }else if(document.webkitExitFullscreen){
      document.webkitExitFullscreen();
   }
   getbtnclosefullscreen.style.display = 'none';
});