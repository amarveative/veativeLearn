document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 150) {
          document.getElementById('veativeHeader').classList.add('fixed-header');
          // add padding top to show content behind navbar
          header_height = document.querySelector('.header').offsetHeight;
          document.body.style.paddingTop = header_height + 'px';
        } else {
          document.getElementById('veativeHeader').classList.remove('fixed-header');
           // remove padding top from body
          document.body.style.paddingTop = '0';
        } 
    });
  }); 