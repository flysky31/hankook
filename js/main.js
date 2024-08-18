
$(document).ready(function() {

    var mainSwiper = new Swiper(".mainSwiper", {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        effect:'fade',
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
     
    });
      
    var productSwiper = new Swiper(".productSwiper", {
      loop: true,
       autoplay: {
         delay: 5000,
         disableOnInteraction: false,
       },
       speed:1000,
      autoHeight : true,
      navigation: {
         nextEl: ".product-button-next",
         prevEl: ".product-button-prev",
       },
    });
     
});
    

    

$(document).ready(function(){
     //공지사항
     var swiper = new Swiper(".noticeSwiper", {
      direction: "vertical",
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      speed:1000
  });
  AOS.init({
    offset: 200,
    duration: 400,
    easing: 'linear',
    delay: 10,
    once:true
    });
})






