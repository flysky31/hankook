$(document).ready(function(){
  $(".tabs > li").click(function(){
    $(this).toggleClass("on");
    $('.tabs > li').not(this).removeClass('on');        

  })
  $(".sub_tab > li").click(function(){
    $(this).toggleClass("on");
    $('.sub_tab > li').not(this).removeClass('on');        

  })
  $("#store_area .tab-btn").click(function() {
    $("#store_area .tab-btn").removeClass("active");
    $("#store_area .tab-content").removeClass("active");

    var tabId = $(this).data("tab");
    $("#" + tabId).addClass("active");
    $(this).addClass("active");
  });

  $("#product_area .tab-btn").click(function() {
    $("#product_area .tab-btn").removeClass("active");
    $("#product_area .tab-content").removeClass("active");

    var tabId = $(this).data("tab");
    $("#" + tabId).addClass("active");
    $(this).addClass("active");
  });

  
  var tab01_Swiper = new Swiper(".tab01_Swiper", {
      spaceBetween: 10,
      slidesPerView: 3,
      observer: true,
      observeParents: true,
      freeMode: true,
      breakpoints: {        
        768: {
          slidesPerView: 5, 
        },
      } 
       
  });
  var tab01_Swiper2 = new Swiper(".tab01_Swiper2", {
      spaceBetween: 10,
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: ".tab01.swiper-button-next",
        prevEl: ".tab01.swiper-button-prev",
      },
      thumbs: {
        swiper: tab01_Swiper,
      },
    
  });

  var tab02_Swiper = new Swiper(".tab02_Swiper", {
    spaceBetween: 10,
    slidesPerView: 3,
    observer: true,
    observeParents: true,
    freeMode: true,
    breakpoints: {        
      768: {
        slidesPerView: 5, 
      },
    } 

  });
  var tab02_Swiper2 = new Swiper(".tab02_Swiper2", {
      spaceBetween: 10,
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: ".tab02.swiper-button-next",
        prevEl: ".tab02.swiper-button-prev",
      },
      thumbs: {
        swiper: tab02_Swiper,
      },
  });
  

  var tab03_Swiper = new Swiper(".tab03_Swiper", {
    spaceBetween: 10,
    slidesPerView: 3,
    observer: true,
    observeParents: true,
    freeMode: true,
    breakpoints: {        
      768: {
        slidesPerView: 5, 
      },
    } 

});
var tab03_Swiper2 = new Swiper(".tab03_Swiper2", {
    spaceBetween: 10,
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".tab03.swiper-button-next",
      prevEl: ".tab03.swiper-button-prev",
    },
    thumbs: {
      swiper: tab03_Swiper,
    },
});

var tab04_Swiper = new Swiper(".tab04_Swiper", {
  spaceBetween: 10,
  slidesPerView: 3,
  observer: true,
  observeParents: true,
  freeMode: true,
  breakpoints: {        
    768: {
      slidesPerView: 5, 
    },
  } 
});
var tab04_Swiper2 = new Swiper(".tab04_Swiper2", {
  spaceBetween: 10,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: ".tab04.swiper-button-next",
    prevEl: ".tab04.swiper-button-prev",
  },
  thumbs: {
    swiper: tab04_Swiper,
  },
});



var tab05_Swiper = new Swiper(".tab05_Swiper", {
  spaceBetween: 10,
  slidesPerView: 3,
  observer: true,
  observeParents: true,
  freeMode: true,
  breakpoints: {        
    768: {
      slidesPerView: 5, 
    },
  } 

});
var tab05_Swiper2 = new Swiper(".tab05_Swiper2", {
  spaceBetween: 10,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: ".tab05.swiper-button-next",
    prevEl: ".tab05.swiper-button-prev",
  },
  thumbs: {
    swiper: tab05_Swiper,
  },
});


var tab06_Swiper = new Swiper(".tab06_Swiper", {
  spaceBetween: 10,
  slidesPerView: 3,
  observer: true,
  observeParents: true,
  freeMode: true,
  breakpoints: {        
    768: {
      slidesPerView: 5, 
    },
  } 

});
var tab06_Swiper2 = new Swiper(".tab06_Swiper2", {
  spaceBetween: 10,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: ".tab06.swiper-button-next",
    prevEl: ".tab06.swiper-button-prev",
  },
  thumbs: {
    swiper: tab06_Swiper,
  },
});


var tab07_Swiper = new Swiper(".tab07_Swiper", {
  spaceBetween: 10,
  slidesPerView: 3,
  observer: true,
  observeParents: true,
  freeMode: true,
  breakpoints: {        
    768: {
      slidesPerView: 5, 
    },
  } 

});
var tab07_Swiper2 = new Swiper(".tab07_Swiper2", {
  spaceBetween: 10,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: ".tab07.swiper-button-next",
    prevEl: ".tab07.swiper-button-prev",
  },
  thumbs: {
    swiper: tab07_Swiper,
  },
});


var tab08_Swiper = new Swiper(".tab08_Swiper", {
  spaceBetween: 10,
  slidesPerView: 3,
  observer: true,
  observeParents: true,
  freeMode: true,
  breakpoints: {        
    768: {
      slidesPerView: 5, 
    },
  } 
  
});
var tab08_Swiper2 = new Swiper(".tab08_Swiper2", {
  spaceBetween: 10,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: ".tab08.swiper-button-next",
    prevEl: ".tab08.swiper-button-prev",
  },
  thumbs: {
    swiper: tab08_Swiper,
  },
});


var tab09_Swiper = new Swiper(".tab09_Swiper", {
  spaceBetween: 10,
  slidesPerView: 3,
  observer: true,
  observeParents: true,
  freeMode: true,
  breakpoints: {        
    768: {
      slidesPerView: 5, 
    },
  } 

});
var tab09_Swiper2 = new Swiper(".tab09_Swiper2", {
  spaceBetween: 10,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: ".tab09.swiper-button-next",
    prevEl: ".tab09.swiper-button-prev",
  },
  thumbs: {
    swiper: tab09_Swiper,
  },
});

})


