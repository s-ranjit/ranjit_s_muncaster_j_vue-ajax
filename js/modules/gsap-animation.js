export function GsapAnimation() {
gsap.registerPlugin(ScrollTrigger); 
    
  gsap.from("#logo", {
  opacity: 0,
  y: -40,
  duration: 1,
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
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: "#logo",
    toggleActions: "play none none none",
    start: "top 85%",
    end: "bottom top"
  }
});
gsap.from(".burger-con li", {
  opacity: 0,
  y: -40,
  duration: 1.2,
  stagger: 0.3,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".burger-con",
    toggleActions: "play none none none",
    start: "top 85%",
    end: "bottom top"
  }
});
gsap.from(".header-icons", {
  opacity: 0,
  y: -40,
  duration: 1.2,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".header-icons",
    toggleActions: "play none none none",
    start: "top 85%",
    end: "bottom top"
  }
});

gsap.from(".footer-txt", {
  opacity: 0,
  y: 20,
  duration: 2,
  delay: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".footer",
    toggleActions: "restart pause reverse pause",
    start: "top 88%",
    end: "bottom top"
  }
});
  gsap.from(".hero-image img", {
    opacity: 0,
    scale: 1.1,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".hero-image img",
      toggleActions: "play none none none",
      start: "top 90%",
      end: "bottom top"
    }
  });

  gsap.from(".hero-text ", {
    opacity: 0,
    y: 20,
    duration: 1.5,
    delay: 0.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".hero-text",
      toggleActions: "play none none none",
      start: "top 90%"
    }
  });

 gsap.from(".btn", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".btn",
      toggleActions: "play none none none",
      start: "top 95%"
    }
  });

  gsap.from(".brands h2", {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 1.4,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".brands",
      start: "top 90%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(".brands p", {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 1.6,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".brands",
      start: "top 90%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(".building-blocks img", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".aboutus",
      start: "top 90%",
      toggleActions: "play none none none"
    }
  });

   gsap.from(".aboutus h3", {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.27,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".aboutus",
      start: "top 90%",
      toggleActions: "play none none none"
    }
  });

  gsap.from(".aboutus p", {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.5,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".aboutus",
      start: "top 90%",
      toggleActions: "play none none none"
    }
  });
  
  gsap.from(".features", {
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".features",
      start: "top 90%",
      toggleActions: "play none none none"
    }
  });

   gsap.from(".shop h2", {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".shop",
      start: "top 90%",
      toggleActions: "play none none none"
    }
  });
  gsap.from(".shop p", {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 0.6,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".shop",
      start: "top 90%",
      toggleActions: "play none none none"
    }
  });
   
  gsap.from(".footer-logo img", {
    opacity: 0,
    y: 40,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".footer-logo img",
      toggleActions: "play none none none",
      start: "top 85%",
      end: "bottom top"
    }
  });

  gsap.from(".footer-nav li", {
    opacity: 0,
    y: 40,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out", 
    scrollTrigger: {
      trigger: ".footer-nav",
      start: "top 90%",
      end: "bottom top"
    }
  });

  gsap.from(".social-medias a", {
    opacity: 0,
    y: 40,
    duration: 1,
    delay: 1,
    stagger: 0.2,
    ease: "power3.out", 
    scrollTrigger: {
      trigger: ".social-media",
      start: "top 90%",
      end: "bottom top"
    }
  });

}