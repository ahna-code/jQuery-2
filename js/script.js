'use strict'
$(document).ready(function(){
    
  const carouselList = $("#carousel ul");
      
  let timer = setInterval(moveLeft, 3000);
  let direction = 'left';
  
  /* MOVE LEFT  */
  
  function moveLeft(){
   carouselList.animate({marginLeft:-700}, 700, moveLeftAfter);
  }
  
  function moveLeftAfter() {
    carouselList.find("li:last").after(carouselList.find("li:first"));
    carouselList.css({marginLeft:0});
  };
  
  /* MOVE RIGHT */
  
  function moveRight() {
    carouselList.find("li:first").before(carouselList.find("li:last"));
    carouselList.css({marginLeft:-700});
    moveRightAfter()
  }
  
  function moveRightAfter() {
    carouselList.animate({marginLeft:0}, 700);
  }
  
  $("#carousel").on('mouseover', function() {
    window.clearInterval(timer);
  })
  
  $("#carousel").on('mouseleave', function() {
    window.clearInterval(timer);
    if(direction === 'left') timer = setInterval(moveLeft, 3000);
    else timer = setInterval(moveRight, 3000); 
  })
  
  $("#leftBtn").click(function() {
    window.clearInterval(timer);
    moveLeft();
    direction = 'left'
  })
  
  $("#rightBtn").click(function() {
    window.clearInterval(timer);
    moveRight();
    direction = 'right'
  })
});  




 
  
