// scroll function for the header in the secondary pages 
function scrollDown() {
   const header = document.querySelector('.headerWrap');
   let headerHeight = header.offsetHeight;
   let scroll = headerHeight;

   window.scrollTo({
      top: scroll, 
      left: 0, 
      behavior: 'smooth'
   });
}

// scroll function for the header in the home page 
function scrollDown1() {
   const header = document.querySelector('.headerWrap');
   let headerHeight = header.offsetHeight;
   let scroll = headerHeight - 60;

   window.scrollTo({
      top: scroll, 
      left: 0, 
      behavior: 'smooth'
   });
}
