var getdots = document.getElementsByClassName('dot');
var getpages = document.getElementsByClassName('page');
   // console.log(getpages);   // HTMLCollection
var getform = document.getElementById('form');
var getprevbtn = document.getElementById('prevbtn');
var getnextbtn = document.getElementById('nextbtn');

var curridx = 0;

showpage(curridx);

function showpage(num){
      // console.log(num);

   getpages[num].style.display = 'block';

   num === 0 ? getprevbtn.style.display = 'none' : getprevbtn.style.display = 'inline-block';
   num === (getpages.length - 1) ? getnextbtn.textContent = 'Submit' : getnextbtn.textContent = 'Next';

   dotindicator(num);
}

function dotindicator(num){
      // console.log(num);
   
   for(var x = 0; x < getdots.length; x++){
      getdots[x].classList.remove('active');
   }

   getdots[num].className += ' active';
}


function gonow(num){
      // console.log(num);
      // console.log(curridx);

   // Method 1
   
      // if(num === 1 && formvalidation()){
      //    getpages[curridx].style.display = 'none';

      //    curridx = curridx + num;
      //       // console.log(curridx);

      //    if(curridx >= getpages.length){
      //       getform.submit();
      //    }
      //    showpage(curridx);
      // }

   // Method 2

      // if(num === 1 && !formvalidation()){
      //    return false;
      // }

      // getpages[curridx].style.display = 'none';

      //    curridx = curridx + num;
      //       // console.log(curridx);

      //    if(curridx >= getpages.length){
      //       getform.submit();
      //    }
      //    showpage(curridx);

   // Method 3

      if(num === 1 && !formvalidation()) return false;

      getpages[curridx].style.display = 'none';

         curridx = curridx + num;
            // console.log(curridx);

         if(curridx >= getpages.length){
            getform.submit();
         }
         showpage(curridx);
}

function formvalidation(){
   var valid = true;

   var getcurrinput = getpages[curridx].getElementsByTagName('input');
      // console.log(getcurrinput);
      // console.log(getcurrinput[0].value);

   for(var x = 0; x < getcurrinput.length; x++){
         // console.log(getcurrinput[x].value);
      
      if(getcurrinput[x].value === ''){
         getcurrinput[x].classList.add('invalid');
         valid = false;
      }
   }

   if(valid){
      getdots[curridx].className += ' done';
   }

   return valid;
}