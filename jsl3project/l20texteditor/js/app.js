var gettxtarea = document.getElementById('textarea');
var getdivarea = document.getElementById('divarea');

   getdivarea.contentEditable = true;
   getdivarea.spellcheck = false;

var getbtns = document.querySelectorAll('.btn');   // NodeList

   getbtns.forEach(function(getbtn){
      getbtn.addEventListener('click', function(){
         // var getcommand = getbtn.getAttribute('data-command');
         var getcommand = getbtn.dataset['command'];
               // console.log(getcommand);
         if(getcommand === 'cleartext'){
            getdivarea.innerHTML = '';
         }else if(getcommand === 'createLink' || getcommand === 'insertImage'){
            let geturl = prompt('Enter your Website Link', 'https://');   // Message    Default
               document.execCommand(getcommand, false, geturl);
         }else if(getcommand === 'foreColor'){
            document.execCommand(getcommand, false, getbtn.value);
         }else if(getcommand === 'backColor'){
            document.execCommand(getcommand, false, getbtn.value);
         }else if(getcommand === 'fontName'){
            document.execCommand(getcommand, false, getbtn.value);
         }else if(getcommand === 'paste'){
            navigator.clipboard.readText().then(function(cliptext){
                  // console.log(cliptext);
               getdivarea.innerHTML += cliptext;
            });
         }else{
            document.execCommand(getcommand, false, null);
         }
      });
   });