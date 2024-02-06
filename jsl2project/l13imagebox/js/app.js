const getimageboxes = document.querySelectorAll('.imgbox');
   // console.log(getimgboxes)   // NodeList

   getimageboxes.forEach(function(getimagebox, idx){
   // console.log(getimgbox);
   // console.log(idx);

   getimagebox.addEventListener('click', function(){
      // console.log(idx);
      showbox(idx);
   });
});

function showbox(idx){
   // console.log(idx);

   getimageboxes.forEach(function(imagebox, curidx){
      // console.log('Form Parameter = ', idx);
      // console.log('Form Current = ', curidx);

      if(idx === curidx){
         imagebox.classList.add('show');

         imagebox.addEventListener('click', function(e){
            // console.log(e.target);
            // console.log(e.target.className);

            if(e.target.className === 'btn-close'){
               imagebox.classList.remove('show');
            }
            
            if(e.target.className === 'btn'){
               const subbtn = imagebox.querySelector('.btn');
               subbtn.textContent = 'Subscribed';
            }
         });
      }else{
         imagebox.classList.remove('show');
      }
   });
}