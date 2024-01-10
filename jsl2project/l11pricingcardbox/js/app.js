const getcheckbox = document.getElementById('toggle-checkbox');
const getchecklabel = document.getElementById('toggle-label');
const getbasic = document.getElementById('basic');
const getprof = document.getElementById('prof');
const getmst = document.getElementById('mst');

getchecklabel.addEventListener('click', function(){
   // console.log('I am working');

   if(getcheckbox.checked){
      getbasic.textContent = 10;
      getprof.textContent = 20;
      getmst.textContent = 30;
   }else{
      getbasic.textContent = 120;
      getprof.textContent = 240;
      getmst.textContent = 360;
   }
});