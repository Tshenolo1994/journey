Pace.on('done', function() {
 
  $('.p').delay(500).animate({top: '30%', opacity: '0'}, 3000, $.bez([0.19,1,0.22,1]));


  $('#preloader').delay(1500).animate({top: '-200%',opacity: '0'}, 3000, $.bez([0.19,1,0.22,1]));

  $('.pace').delay(1500).animate({opacity: '0'}, 2000, $.bez([0.19,1,0.22,1]));
      TweenMax.to(".text", 2, {
          delay: 1.8,
               y: 10,
               opacity: 1,
               ease: Expo.easeInOut
         })
         TweenMax.to(".time-wrapper", 2, {
          delay: 1.8,
               opacity: 1,
               ease: Expo.easeInOut
         })
         TweenMax.to(".coord", 2, {
          delay: 2,
        opacity:1,
               ease: Expo.easeInOut
         })
 });

// $(function () {
//   $(document).scroll(function () {
//     var $nav = $(".navbar-fixed-top");
//     $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
//   });
// });


var darkMode;

if (localStorage.getItem('dark-mode')) {  
  // if dark mode is in storage, set variable with that value
  darkMode = localStorage.getItem('dark-mode');  
} else {  
  // if dark mode is not in storage, set variable to 'light'
  darkMode = 'light';  
}

// set new localStorage value
localStorage.setItem('dark-mode', darkMode);



if (localStorage.getItem('dark-mode') == 'dark') {
  // if the above is 'dark' then apply .dark to the body
  $('body').addClass('dark');  
  // hide the 'dark' button
  $('.dark-button').hide();
  // show the 'light' button
  $('.light-button').show();
}


// Toggle dark UI

$('.dark-button').on('click', function() {  
  $('.dark-button').hide();
  $('.light-button').show();
  $('body').addClass('dark');  
  // set stored value to 'dark'
  localStorage.setItem('dark-mode', 'dark');
});

$('.light-button').on('click', function() {  
  $('.light-button').hide();
  $('.dark-button').show();
  $('body').removeClass('dark');
  // set stored value to 'light'
  localStorage.setItem('dark-mode', 'light');   
});



//--------------------------------------------------
// Below is all that is neede for the basic toggle
//--------------------------------------------------



var lastScrollTop; // This Varibale will store the top position

navbar = document.getElementById('navtop'); // Get The NavBar

window.addEventListener('scroll',function(){
 //on every scroll this funtion will be called
  
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //This line will get the location on scroll
  
  if(scrollTop > lastScrollTop){ //if it will be greater than the previous
    navbar.style.top='-8vh';
    //set the value to the negetive of height of navbar 
  }
  
  else{
    navbar.style.top='0';
  }
  
  lastScrollTop = scrollTop; //New Position Stored
});


myAudio = new Audio('./audio.mp3'); 
if (typeof myAudio.loop == 'boolean')
{
    myAudio.loop = true;
}
else
{
    myAudio.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}

function myFunction() {

const soundBtn = document.querySelector('.volume-btn');

  if (soundBtn.innerHTML === "Sound on") {
    soundBtn.innerHTML = "Sound off";
 
    myAudio.play();
  } else {
    soundBtn.innerHTML = "Sound on";

      myAudio.pause();
   
  }
}



var $hamburger = $('.hamburger');

TweenLite.set('.line01',{x:40});  
TweenLite.set('.line03',{x:-40});
TweenLite.set('.navigation',{xPercent:-50, yPercent:-50})
TweenLite.set('.navigation li',{opacity:1}); 

var hamburgerMotion = new TimelineMax()
.to('.line03',0.4,{x:'-=50'},0)
.to('.line01',0.4,{x:'+=50'},0)
.to('.menu',0.4,{autoAlpha:1},0)
.staggerTo('.navigation li',0.1,{x:0,ease: Sine.easeOut},0.2,0.5)
.to('.navigation li',1,{marginBottom:'100px', ease: Power1.easeOut})
.reverse()

$hamburger.on('click', function(e) {
  hamburgerMotion.reversed(!hamburgerMotion.reversed());
  document.body.classList.toggle('lock-scroll');
});



function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}
let displayTime = document.querySelector(".time")
const date = new Date();
const time = (formatAMPM(new Date));
displayTime.innerHTML = time
gsap.registerPlugin(ScrollTrigger);
 
gsap.to(".scroll-btn", {
  scrollTrigger: ".map", 
  start:"center center",
  end:"bottom bottom",

  opacity:0,
});
console.clear();
gsap.config({ trialWarn: false });
gsap.registerPlugin(ScrollTrigger);
gsap.to("#container", {
  "--target": "0%",
  ease: "none",
  scrollTrigger: {
    trigger: "#container",
    // markers: {
    //   startColor: "yellow",
    //   endColor: "#42a6e0",
    //   fontSize: "14px"
    // },
    start: "top top",
    end: "#container",
    pin: true,
    scrub: 1,
  }
});
gsap.registerPlugin(ScrollTrigger);
 
gsap.to(".location img", {
  scrollTrigger: ".location", 
  start:"top top",
  end:"bottom bottom",
  pin:true,
  opacity:0.4,
});

gsap.registerPlugin(ScrollTrigger);
const t1 = gsap.timeline({
  scrollTrigger: {
      trigger: ".map",
      scrub: true,
      start: "top top",
      end: "+=100%",
      pin: true, 
      scrub:2,
     
  }
});

t1.from(".p-one", {duration: 1,opacity: 0})
.to(".p-one", {duration: 1,opacity: 0,delay:1})
  .from(".p-two", {duration: 1,opacity: 0,delay:3})
  .from(".p-three", {duration: 1,opacity: 0,delay:3.5})
gsap.registerPlugin(ScrollTrigger);


let revealContainers = document.querySelectorAll(".location");

revealContainers.forEach((container) => {
  let image = container.querySelector(".location img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: "bottom +=20",
      pin: true,
      scrub: 1,
    }
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(image,{
y:"105vh",
  });
});

gsap.registerPlugin(ScrollTrigger);
let sections = gsap.utils.toArray('.page-two')

gsap.to(sections, {
  xPercent: -100 * (sections.length -1),
  ease: "none",
  scrollTrigger: {
      trigger: ".horizontal-parent",
      pin: true,
      start: 'top',        

      scrub: 1,
  end: () => "+=" + (document.querySelector(".horizontal-parent").offsetWidth / 4),
  }
})





  const pinnedImages = document.querySelectorAll('.pinned-image');

  pinnedImages.forEach(pinnedImage => {
    const container = pinnedImage.querySelector('.pinned-image__container');
    const image = container.querySelector('img');
    const overlay = container.querySelector('.pinned-image__container-overlay');
    const quote = pinnedImage.querySelector('.pinned-image__quote');
    const top = pinnedImage.querySelector('.top');
    const tl = gsap.timeline({paused: true});
    tl.to(container, {
      scale: 1.1,
    }, 0);
    tl.from(quote, {
      autoAlpha: 0,
    
    }, 0);
    tl.from(top, {
      autoAlpha: 0,

    }, 0);
    tl.from(overlay, {
      autoAlpha: 0,
    }, 0);
    const trigger = ScrollTrigger.create({
      animation: tl,
      trigger: pinnedImage,
      start: "top top",
      markers: false,
      pin: true,
      scrub: true,
    });
  });
 

gsap.config({ trialWarn: false });
gsap.registerPlugin(ScrollTrigger);
gsap.to("#contact", {
  "--target": "0%",
  ease: "none",
  scrollTrigger: {
    trigger: "#contact",
    // markers: {
    //   startColor: "yellow",
    //   endColor: "#42a6e0",
    //   fontSize: "14px"
    // },
    start: "top top",
    end: "#contact",
    pin: true,
    scrub: 1,
  }
});

gsap.to('.text0',{
  x:'20%',rotate:10,duration:0.85,opacity:0, scrollTrigger:{
    trigger:'.text0',
    scrub:true,
    start:'top 20%',

  }
})

gsap.to('.text1',{
  x:'-20%',rotate:-10,duration:0.85, opacity:0,  scrollTrigger:{
    trigger:'.text1',
    scrub:true,

    start:'top 30%'
  }
})




gsap.registerPlugin(ScrollTrigger);

// if there are objects that may get inline styles added (like via tweens) that should get reverted, use ScrollTrigger.saveStyles() initially so that the current inline styles are saved for later reversion. It's not always necessary, but it goes well with ScrollTrigger.matchMedia() so we figured it'd make sense to show it here (it's not needed in this demo)
ScrollTrigger.saveStyles(".mobile, .desktop");

/*** Different ScrollTrigger setups for various screen sizes (media queries) ***/
ScrollTrigger.matchMedia({
	
	// desktop
	"(min-width: 800px)": function() {
		// setup animations and ScrollTriggers for screens over 800px wide (desktop) here...
		// ScrollTriggers will be reverted/killed when the media query doesn't match anymore.

    gsap.registerPlugin(ScrollTrigger);
(function($){

  $(document).ready(function (){
    var pinnedTrigger = $('.pinned-content__intro');
    var pinnedContent = $('.pinned-content__sections');
    
    gsap.registerPlugin(ScrollTrigger);
            
    gsap.to(pinnedTrigger, {
      scrollTrigger: {
      
        trigger: pinnedTrigger,
        endTrigger: pinnedContent, 
        start: "top 10%",
        end: "bottom bottom",
        toggleActions: 'play pause pause reverse',
        pin: true,
        pinSpacing: false,
        scrub: 1,
        anticipatePin: 1
      }
    });
  });
  
  })(window.jQuery);
    gsap.to('.profiles-images svg',{
      y:'80vh', opacity:.6, scale:.8,scrollTrigger:{
        trigger:'.text1',
        scrub:(7 - 1) * 0.1,
    
        start:'center 40%'
      }
    })
    document.querySelector('#back').addEventListener('click',()=>{
          gsap.to(window, {duration: 1, scrollTo:'body'});
    
    })
  }, 
  
	// mobile
	"(max-width: 799px)": function() {
		// Any ScrollTriggers created inside these functions are segregated and get
		// reverted/killed when the media query doesn't match anymore. 
    gsap.to('.profiles-images svg',{
      y:'80vh', opacity:.6, scale:1.1,scrollTrigger:{
        trigger:'.text1',
        scrub:(7 - 1) * 0.1,
    
        start:'center 40%'
      }
    })
    document.querySelector('#back').addEventListener('click',()=>{
          gsap.to(window, {duration: 1, scrollTo:'body'});
    
    })
  }, 
  
	// all 
	"all": function() {
		// ScrollTriggers created here aren't associated with a particular media query,
		// so they persist.
	}
  
});


