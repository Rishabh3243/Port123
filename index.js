// <!-- typed js effect starts -->
var typed = new Typed(".typ", {
    strings: ["frontend development", "backend development", "web designing", "android development", "web development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->
 

// <!-- Nav bar color change Start -->
window.onscroll = () => {
    const nav = document.querySelector('.nav');
    if(this.scrollY <= 10) nav.className = ''; else nav.className = '.nav.scroll';
  };
// <!-- Nav bar color change End -->