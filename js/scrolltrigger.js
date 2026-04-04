// /  Header GSAP animations
gsap.registerPlugin(ScrollTrigger); 
gsap.from("#logo", {
  opacity: 0,
  y: -40,
  duration: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#logo",
    toggleActions: "play none none none",
    start: "top 85%",
    end: "bottom top"
  }
});
gsap.from("#ham-burger", {
  opacity: 0,
  y: -40,
  duration: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#logo",
    toggleActions: "play none none none",
    start: "top 85%",
    end: "bottom top"
  }
});
gsap.from(".burger-con", {
  opacity: 0,
  y: -40,
  duration: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".burger-con",
    toggleActions: "play none none none",
    start: "top 85%",
    end: "bottom top"
  }
});


//  Footer GSAP animations

gsap.from(".footer-txt", {
  opacity: 0,
  y: 20,
  duration: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".footer",
    toggleActions: "restart pause reverse pause",
    start: "top 85%",
    end: "bottom top"
  }
});
gsap.from(".social-medias a", {
  opacity: 0,
  y: 20,
  duration: 1.5,
  ease: "power3.out",
  stagger: 0.3, 
  scrollTrigger: {
    trigger: ".footer",
    toggleActions: "restart pause reverse pause",
    start: "top 90%",
    end: "bottom top"
  }
});



//  INDEX GSAP animations


// Intro heading animation
if (document.querySelector(".intro")) {
 gsap.from(".intro", {
  opacity: 0,             
   duration: 1.4,
        autoAlpha: 0,
        scale: 0,
        ease: "elastic.out(1, 0.6)",
        stagger: 0.2,
  scrollTrigger: {
    trigger: ".intro",      
    start: "top 90%",       
    toggleActions: "play none none none",
  }
});
}

if (document.querySelector(".role")) {
 gsap.from(".role, span", {
  y: 60,
  opacity: 0,             
  duration: 1,
  delay:0.4 ,
        ease: "power3.out",
        stagger: 0.20,
  scrollTrigger: {
    trigger: ".role",      
    start: "top 90%",       
    toggleActions: "play none none none",
  }
});
}
if(document.querySelector(".intro-des")) {
gsap.from(".intro-des", {
  opacity: 0,
  y: 50,
  duration: 2,
  ease: "power3.out",
  delay: 4,
  scrollTrigger: {
    trigger: ".intro-des",
    toggleActions: "play none none none",
    start: "top 85%",
    end: "bottom top"
  }
}); 
}
// get in touch btn animation starts
if(document.querySelector(".cta")) {
  gsap.from(".cta", {
  opacity: 0,       
  x: 50,       
  duration: 1.2, 
  delay: 4.5,    
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".cta",      
    start: "top 90%",       
    toggleActions: "play none none none",
  }
});
}
if(document.querySelector(".tools")) {
gsap.from(".tools", {
  opacity: 0,
  y: 20,
  duration: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".tools",
    toggleActions: "restart pause reverse pause",
    start: "top 85%",
    end: "bottom top"
  }
}); 
}

if(document.querySelector(".tools-logos img")) {
  gsap.from(".tools-logos img", {
  scale: 0.5,
  opacity: 1,
  duration: 0.8,
  ease: "back.out(1.7)",
  scrollTrigger: {
  trigger: ".tools-logos",
  start: "top 80%",   
  toggleActions: "restart pause reverse pause",        
  }
});
}


if(document.querySelector(".video")) {
gsap.from(".video", {
  opacity: 0,
  y: 40,
  duration: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".video",
    toggleActions: "play none none none",
    start: "top 85%",
    end: "bottom top"
  }
});
}
if(document.querySelector(".featured-projects h2")) {
gsap.from(".featured-projects h2", {
  opacity: 0,
  y: 20,
  duration: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".featured-projects h2",
    toggleActions: "play none none none",
    start: "top 85%",
    end: "bottom top"
  }
}); 
}
if(document.querySelector("#slider-container")) {
gsap.from("#slider-container", {
  opacity: 0,
  scale: 1.2,          
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#slider-container",
    start: "top 80%",
    end: "bottom top",
    toggleActions: "play none none reverse"
  }
});
}
if(document.querySelector(".work")) {
gsap.from(".work", {
   opacity: 1,
   x: -60,
   duration: 1,
   ease: "power2.out",
   scrollTrigger: {
   trigger: "article",
    start: "top 90%",
    end: "bottom top",
    toggleActions: "restart pause reverse pause", 
 }
});
}


// About page Animation Starts
if(document.querySelector(".situ-img")) {
 gsap.from(".situ-img",{ 
  
  opacity: 0,       
  x: -50,       
  duration: 1,     
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".situ-img",      
    start: "top 90%",       
    toggleActions: "play none none none",
  }
 });
}
if(document.querySelector(".about-content")) {
 gsap.from(".about-content h2",{ 
  
  opacity: 0,       
  x: 50,       
  duration: 1,     
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about-section",      
    start: "top 90%",       
    toggleActions: "play none none none",
  }
 });
 gsap.from(".about-content p",{ 
  
  opacity: 0,       
  x: 50,       
  duration: 1, 
  delay: 0.2,    
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about-section",      
    start: "top 90%",       
    toggleActions: "play none none none",
  }
 });
  gsap.from(".btn",{ 
  
  opacity: 0,       
  x: 50,       
  duration: 1, 
  delay: 0.3,    
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".about-section",      
    start: "top 90%",       
    toggleActions: "play none none none",
  }
 });
}

if(document.querySelector(".bg")) {
gsap.from(".bg h2", {
  opacity: 0,
  y: 20,
  duration: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".bg",
    toggleActions: "restart pause reverse pause",
    start: "top 85%",
    end: "bottom top"
  }
}); 
}
if(document.querySelector(".skills-box")) {
gsap.from(".skills-box", {
  opacity: 0,
  y: 20,
  duration: 1.5,
  ease: "power3.out",
  stagger: 0.3, 
  scrollTrigger: {
    trigger: ".skills-box",
    toggleActions: "play none none none",
    start: "top 90%",
    end: "bottom top"
  }
});
}


if(document.querySelector(".facts-image")) {
gsap.from(".facts-image img", {
    opacity: 0,
    y: 70, 
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
    trigger: ".facts-image",
    toggleActions: "restart pause reverse pause",
    start: "top 85%",
    end: "bottom top"
  }
});
}
if(document.querySelector(".facts-box")) {
gsap.from(".facts-box h3", {
  opacity: 0,
  y: 20,
  duration: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".facts-box",
    toggleActions: "restart pause reverse pause",
    start: "top 85%",
    end: "bottom top"
  }
}); 
}

if(document.querySelector(".facts-box p")) {
gsap.utils.toArray(".facts-box p").forEach((card) => {
  gsap.from(card, {
    opacity: 0.8,
    y: 80,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: card,
      scrub: 1,
      toggleActions: "restart pause reverse pause",
      start: "top 95%",
      end: "bottom top"
    }
  });
});
}


// Project section Animation Starts
if(document.querySelector(".left")) {
gsap.utils.toArray(".left").forEach((card) => {
  gsap.from(card, {
    opacity: 0,
    x: -85,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: card,
      scrub: 1,
      toggleActions: "restart pause reverse pause",
      start: "top 90%",
      end: "bottom top"
    }
  });
});
}
if(document.querySelector(".right")) {
gsap.utils.toArray(".right").forEach((card) => {
  gsap.from(card, {
    opacity: 0,
    x: 85,
    duration: 1.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: card,
      scrub: 1,
      toggleActions: "restart pause reverse pause",
      start: "top 90%",
      end: "bottom top"
    }
  });
});
}


if(document.querySelector(".pjt-contact")) {
gsap.from(".ideas-title", {
  opacity: 0,
  y: 40,
  duration: 1,
  delay: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".pjt-contact",
    toggleActions: "restart pause reverse pause",
    start: "top 85%",
    end: "bottom top"
  }
});
gsap.from(".link", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.3,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".pjt-contact",
    toggleActions: "restart pause reverse pause",
    start: "top 85%",
    end: "bottom top"
  }
});
}


if(document.querySelector(".pjt-html")) {
gsap.from(".pjt-html h2", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".project-section",
    toggleActions: "play none none none",
    start: "top 85%",
    end: "bottom top"
  }
});

gsap.from(".pjt-html p", {
  opacity: 0,
  y: 40,
  duration: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".project-section",
    toggleActions: "play none none none",
    start: "top 85%",
    end: "bottom top"
  }
});
}
if(document.querySelector(".project-content")) {
gsap.from(".project-content h2", {
  opacity: 0,
  y: 50,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".project-section",
    toggleActions: "play none none none",
    start: "top 85%",
    end: "bottom top"
  }
});

gsap.from(".project-content p", {
  opacity: 0,
  y: 40,
  duration: 2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".project-section",
    toggleActions: "play none none none",
    start: "top 85%",
    end: "bottom top"
  }
});
}



//  Project Going back Animation Starts
if(document.querySelector(".back-link")) {
 gsap.from(".back-link",{ 
  
  opacity: 0,       
  x: -30,       
  duration: 0.5,     
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".back-link",      
    start: "top 90%",       
    toggleActions: "play none none none",
  }
 });
}
if(document.querySelector(".line-separator")) {
gsap.from(".line-separator", { 
  width: 0,                
  duration: 1,             
  ease: "power2.out",      
  scrollTrigger: {
    trigger: ".pjt-html",
    start: "top 90%",    
    toggleActions: "play none none none", 
  }
});
}

//  Billy Beer Animation Starts
if(document.querySelector(".rebranding")) {
 gsap.from(".rebranding h2",{ 
  
  opacity: 0,       
  x: -60,       
  duration: 1,     
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".rebranding",      
    start: "top 90%",       
    toggleActions: "play none none none",
  }
 });

gsap.from(".rebranding img", {
  opacity: 0,
  y: 40,
  duration: 1,
  delay: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".rebranding img",
    toggleActions: "play none none none",
    start: "top 85%",
    end: "bottom top"
  }
});

 gsap.from(".rebranding p",{ 
  opacity: 0,       
  x: -50,       
  duration: 1,     
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".rebranding p",      
    start: "top 75%",       
    toggleActions: "play none none none",
  }
 });
}
if(document.querySelector(".working-period")) {
gsap.utils.toArray(".working-period p").forEach((card) => {
  gsap.from(card, {
    opacity: 0.8,
    y: 80,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: card,
      scrub: 1,
      toggleActions: "restart pause reverse pause",
      end: "bottom top"
    }
  });
});
}

if(document.querySelector(".info-section")) {
  gsap.from(".challenge",{ 
   opacity: 0,
   x: -50,
   duration: 1.5,
   ease: "power2.out",
   scrollTrigger: {
   trigger: ".challenge",
   scrub: 1,
   toggleActions: "restart pause reverse pause",
   start: "top 80%",
   bottom: "bottom top",
 }
 });
}




// Earbuds Page Animation Starts
if(document.querySelector(".earbuds")) {
 gsap.from(".earbuds h2",{ 
  
  opacity: 0,       
  x: -60,       
  duration: 1,     
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".earbuds",      
    start: "top 90%",       
    toggleActions: "play none none none",
  }
 });

gsap.from(".earbuds img", {
  opacity: 0,
  y: 40,
  duration: 1,
  delay: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".earbuds img",
    toggleActions: "play none none none",
    start: "top 85%",
    end: "bottom top"
  }
});

 gsap.from(".earbuds p",{ 
  opacity: 0,       
  x: -50,       
  duration: 1,     
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".earbuds p",      
    start: "top 75%",       
    toggleActions: "play none none none",
  }
 });
}




// Tv bumper animation starts

if(document.querySelector(".cartoon")) {
 gsap.from(".cartoon h2",{ 
  
  opacity: 0,       
  x: -60,       
  duration: 1,     
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".cartoon",      
    start: "top 90%",       
    toggleActions: "play none none none",
  }
 });

gsap.from(".cartoon img", {
  opacity: 0,
  y: 40,
  duration: 1,
  delay: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".cartoon img",
    toggleActions: "play none none none",
    start: "top 85%",
    end: "bottom top"
  }
});

 gsap.from(".cartoon p",{ 
  opacity: 0,       
  x: -50,       
  duration: 1,     
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".cartoon p",      
    start: "top 75%",       
    toggleActions: "play none none none",
  }
 });
}

if(document.querySelector(".next-link")) {
gsap.from(".next-link", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 0.3,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".next-link",
    toggleActions: "restart pause reverse pause",
    start: "top 85%",
    end: "bottom top"
  }
});
}



//  Seven animation Starts
if(document.querySelector(".seven")) {
 gsap.from(".seven h2",{ 
  
  opacity: 0,       
  x: -60,       
  duration: 1,     
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".seven",      
    start: "top 90%",       
    toggleActions: "play none none none",
  }
 });

gsap.from(".seven img", {
  opacity: 0,
  y: 40,
  duration: 1,
  delay: 0.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".seven img",
    toggleActions: "play none none none",
    start: "top 85%",
    end: "bottom top"
  }
});

 gsap.from(".seven p",{ 
  opacity: 0,       
  x: -50,       
  duration: 1,     
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".seven p",      
    start: "top 75%",       
    toggleActions: "play none none none",
  }
 });
}


// Contact GSAP
if(document.querySelector(".contact")) {
  gsap.from(".contact h2", {
        opacity: 0,
        x: -40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".contact",
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play none none none",
        }
    });

    
    gsap.from("#contact-txt", {
        opacity: 0,
        y: 30,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
            trigger: "#contact-txt",
            start: "top 85%",
            end: "bottom top",
            toggleActions: "play none none none",
        }
    });

    gsap.from("#contact-form", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
            trigger: "#contact-form",
            start: "top 90%",
            end: "bottom top",
            toggleActions: "play none none none",
        }
    });
    gsap.from("#feedback", {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
            trigger: "#feedback",
            start: "top 90%",
            end: "bottom top",
            toggleActions: "play none none none",
        }
    });
}