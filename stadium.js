//nav click dropdown****************************************************************
var navLists=document.querySelectorAll(".nav-list");
var dropdownMenues=document.querySelectorAll(".dropdown-menu");

var clearDropdownMenus=function(){
  for(var i=0; i<dropdownMenues.length;i++){
        dropdownMenues[i].style.display="none";
      }
}

for(var i=0; i<navLists.length; i++){
  navLists[i].addEventListener("click", function(){
    if(this.querySelector(".dropdown-menu").style.display=="block"){
      clearDropdownMenus();
    } else {
      clearDropdownMenus();  
    this.querySelector(".dropdown-menu").style.display="block";
    }
  })
}
//hamburger dropdown ***********************************************
var hamburger=document.querySelector("#hamburger");
var hidden=document.querySelector("#hidden");
var whitespaceTop=document.querySelector("#whitespace-top");


// function setHeight(){
// var h=parseFloat(window.getComputedStyle(hidden).getPropertyValue("height")); 
//   hidden.style.marginTop="-"+(h+50)+"px";
// }

hamburger.addEventListener("click", function(){
  var h=parseFloat(window.getComputedStyle(hidden).getPropertyValue("height")); 
  var mt=parseFloat(window.getComputedStyle(hidden).getPropertyValue("margin-top"));
  if(mt<0){
    hidden.style.marginTop="0px";
  } else {
    var h=parseFloat(window.getComputedStyle(hidden).getPropertyValue("height")); 
    hidden.style.marginTop="-"+(h+70)+"px";
    // whitespaceTop.style.marginTop="300px"
  }
})

//banner click*******************************************************
var close=document.querySelector(".close");
var banner=document.querySelector("#banner");

close.addEventListener("click", function(){
  banner.style.display="none";
})

//go to top button*********************************************
var current=0;
function goUp() {
    document.body.scrollTop = "504";
    document.documentElement.scrollTop = "504";
}
document.getElementById("home").addEventListener("click", function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;  
})

// links rolling up animation******************************************
var smallImgDiv=document.querySelectorAll("#links .img-container div");
var imgContainer=document.querySelector("#links .img-container");
var n=-1;
var i=0;

function resetMarginTop(){
  for(var i=0; i<smallImgDiv.length; i++){
    smallImgDiv[i].style.marginTop="";
  }
}

var t;
var current=0;
function rollup(){
  	var firstImgDiv=document.querySelector("#links .img-container div:nth-of-type(1)");
		var mt=getComputedStyle(firstImgDiv, null).getPropertyValue("margin-top");
		var height=getComputedStyle(firstImgDiv, null).getPropertyValue("height");

		if(Math.abs(parseFloat(mt))>=parseFloat(height)){
        resetMarginTop();
        imgContainer.appendChild(firstImgDiv);
        n=-0.2;
  		} else {
			firstImgDiv.style.marginTop=n+"px";
			n=n-0.2;
  		}
	t=setTimeout("rollup()",10);
}
window.addEventListener("load", function(){
	setTimeout("rollup()",10);
})

imgContainer.addEventListener("mouseover", function(){
	clearTimeout(t);
})
imgContainer.addEventListener("mouseleave", function(){
	setTimeout("rollup()", 10);
})

// clicks on the button, scroll to the top*******************************************************
function goUp() {
    document.body.scrollTop = "504";
    document.documentElement.scrollTop = "504";
}
document.getElementById("home").addEventListener("click", function(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;  
})

// main slider swiper effect*****************************************************************
// var swiper = new Swiper('#slider .swiper-container', {
//   slidesPerView: 1,
//   spaceBetween: 0,
//   loop: true,
//   // effect: 'slide fade',
//   // fadeEffect: {
//   //   crossFade: true,
//   // },
//   // speed:2000,
//   // autoplay: {
//   //   delay: 3000,
//   // },
// })

// var fader = new Swiper('#slider .swiper-container', {
//   slidesPerView: 1,
//   spaceBetween: 0,
//   loop: true,
//   effect: 'fade',
//   fadeEffect: {
//     crossFade: true,
//   },
//   speed:1000,
//   autoplay: {
//     delay: 2000,
//   },
// })

function swiper(){
  var swiper= new Swiper('#slider .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  effect: 'slide',
})
}
var fader = new Swiper('#slider .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: false,
  },
  speed:500,
  autoplay: {
    delay: 1000,
  },
  runCllbacks:false,
})

var slide={
    slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  effect:"slide",
}

// var swiper= new Swiper('#slider .swiper-container', {
//   slidesPerView: 1,
//   spaceBetween: 0,
//   loop: true,
// })
var Swiper;
var container=document.querySelector("#slider-container");
var slideInner=document.querySelector(".swiper-wrapper");

slideInner.addEventListener("mouseover", function(){
	fader.autoplay.stop();
})
slideInner.addEventListener("mouseout", function(){
	fader.autoplay.start();
})
slideInner.addEventListener("mosuedown", function(){
  console.log("mousedonw");
  var swiper= new Swiper('#slider .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  effect:slide,
})
})
// main slider fade effectp*********************************************
// var container=document.querySelector("#slider-container");
// var imgs=document.querySelectorAll(".swiper-slide img");
// var currentImg=document.querySelector(".swiper-slide-active img");
// var preImg=document.querySelector(".swiper-slide-prev img");
// var nextImg=document.querySelector(".swiper-slide-next img");

// function setBg(){
//   for(var i=0; i<imgs.length;i++){

//     imgs[i].style.position="absolute";
//   }
// }
// function setOpacity(){
//     for(var i=0; i<imgs.length;i++){
//     imgs[i].style.opacity="1";
//   }
// }
// function fadePlay(){
//     var preImgURL=document.querySelector(".swiper-slide-prev img").src;
//     container.style.backgroundImage="url(preImgURL)";
//     currentImg.classList.add("fade");
//     currentImg=nextImg;
//     swiper();
// }
//windows onload*******************************************************************************
// window.onload=function(){
//   fadePlay();
// }
