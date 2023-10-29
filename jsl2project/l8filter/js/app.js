var getinput = document.getElementById('search');
var getul = document.getElementById('members');
var getli = getul.getElementsByTagName('li');
   // console.log(getli);   // HTML Collection

var getsortazm1btn = document.getElementById('sortazml');
var getsortzamlbtn = document.getElementById('sortzaml');
var getsortazm2btn = document.getElementById('sortazm2');
var getsortzam2btn = document.getElementById('sortzam2');

getinput.addEventListener('keyup', filter);

getsortazm1btn.addEventListener('click', sortingazml);
getsortzamlbtn.addEventListener('click', sortingzaml);
getsortazm2btn.addEventListener('click', sortingazm2);
getsortzam2btn.addEventListener('click', sortingzam2);

function filter(){
   // console.log('this.value');

   var inputfilter = this.value.toLowerCase();
      // console.log(inputfilter);

   for(var x = 0; x < getli.length; x++){
      // console.log(getli[x]);
      // console.log(getli[x].querySelector('a').innerText.toLowerCase());
      // console.log(getli[x].getElementsByTagName('a')[0].textContent.toLowerCase());

      var getavalue = getli[x].querySelector('a').innerText.toLowerCase();

      if(getavalue.indexOf(inputfilter) > -1){
            getli[x].style.display = '';
      }else{
         getli[x].style.display = 'none';
      }
   }
}


// Method 1

function sortingazml(){
   // console.log("I am Working");

   var lis = [];

   for(var i = 0; i < getli.length; i++){
      // console.log(getli[i]);
      // console.log(getli[i].textContent);

      lis.push(getli[i].textContent);
   }
   // console.log(lis);
   // console.log(lis.sort());
   // console.log(lis.sort().reverse());

   var azlis = lis.sort();

   getul.innerHTML = '';

   azlis.forEach(function(azlis){
      // console.log(azlis);

      const newli = document.createElement('li');
      const newlink = document.createElement('a');

      newlink.href = `javascript:void(0);`;
      newlink.appendChild(document.createTextNode(azlis));
      newli.appendChild(newlink);
         // console.log(newli);

      getul.appendChild(newli);
   });
}

function sortingzaml(){
   var lis = [];

   for(var i = 0; i < getli.length; i++){
      lis.push(getli[i].textContent);
   }

   var azlis = lis.sort().reverse();

   getul.innerHTML = '';

   azlis.forEach(function(azlis){
      const newli = document.createElement('li');
      const newlink = document.createElement('a');

      newlink.href = `javascript:void(0);`;
      newlink.appendChild(document.createTextNode(azlis));
      newli.appendChild(newlink);

      getul.appendChild(newli);
   });
}


// Method 2

function sortingazm2(){
   // console.log('I am Working');

   var shouldswitch = true;
   var switching = true;
      // console.log(getli.length);

   do{
      switching = false;

      var i = 0;

      for(i; i < getli.length - 1; i++){
         shouldswitch = false;

         if(getli[i].textContent.toLowerCase() > getli[i+1].textContent.toLowerCase()){
            shouldswitch = true;
            break;
         }
      }

      if(shouldswitch){
         // element.insertBefore(new, existing) , node.insertBefore(new. existing);

         getli[i].parentElement.insertBefore(getli[i+1], getli[i]);

         switching = true;
      }

   }while(switching);
}

function sortingzam2(){
   // console.log('I am Working');

   var shouldswitch = true;
   var switching = true;
      // console.log(getli.length);

   do{
      switching = false;

      var i = 0;

      for(i; i < getli.length - 1; i++){
         shouldswitch = false;

         if(getli[i].textContent.toLowerCase() < getli[i+1].textContent.toLowerCase()){
            shouldswitch = true;
            break;
         }
      }

      if(shouldswitch){
         // element.insertBefore(new, existing) , node.insertBefore(new. existing);

         getli[i].parentElement.insertBefore(getli[i+1], getli[i]);

         switching = true;
      }

   }while(switching);
}



// console.log(getli[0].textContent.toLowerCase());
// console.log(getli[1].textContent.toLowerCase());

                  // Ag Ag                            // Mg Mg
// if(getli[0].textContent.toLowerCase() > getli[1].textContent.toLowerCase()){
//    console.log('true');
// }else if(getli[0].textContent.toLowerCase() === getli[1].textContent.toLowerCase()){
//    console.log('equal');
// }else{
//    console.log('false');
// }