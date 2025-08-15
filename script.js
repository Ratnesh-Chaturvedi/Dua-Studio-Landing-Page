function scrollTriggerWithLocomotive() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
scrollTriggerWithLocomotive();

//cursor
let img1 = document.querySelector("#img1");
let vid1 = document.querySelector("#vid1");
let vid2 = document.querySelector("#vid2");
let cursor = document.querySelector(".cursor");
let main = document.querySelector("#main");
document.addEventListener("mousemove", function (det) {
  cursor.style.left = det.x + 20 + "px";
  cursor.style.top = det.y + 20 + "px";
});

vid1.addEventListener("mouseenter", function () {
  cursor.classList.remove("cursor");
  cursor.textContent = "view";
  cursor.classList.add("box");
});

vid1.addEventListener("mouseleave", function () {
  cursor.classList.remove("box");
  cursor.textContent = "";
  cursor.classList.add("cursor");
});

vid2.addEventListener("mouseenter", function () {
  cursor.classList.remove("cursor");
  cursor.textContent = "view";
  cursor.classList.add("box");
});

vid2.addEventListener("mouseleave", function () {
  cursor.classList.remove("box");
  cursor.textContent = "";
  cursor.classList.add("cursor");
});

img1.addEventListener("mouseenter", function () {
  cursor.classList.remove("cursor");
  cursor.textContent = "view";
  cursor.classList.add("box");
});

img1.addEventListener("mouseleave", function () {
  cursor.classList.remove("box");
  cursor.textContent = "";
  cursor.classList.add("cursor");
});
gsap.from("#page1 h1 , #page1 h2", {
  y: 10,
  rotate: 10,
  opacity: 0,
  duration: 0.8,
  delay: 0.4,
});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1 h1",
    scroller: "#main",
    scrub: 2,
    start: "top 30%",
    end: "top 0",
  },
});
tl.to("#page1 h1",{
  x: -70,
},"sametime"
);
tl.to("#page1 h2",{
    x: 70,
  },"sametime"
);

tl.to("#page1 video",{
    width: "90%",
  },
  "sametime"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1 h1",
    scroller: "#main",
    scrub: 3,
    start: "top -115%",
    end: "top -120 %",
  },
});

tl2.to("#main", {
  backgroundColor: "white",
});

var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page1 h1",
    scroller: "#main",
    scrub: 3,
    start: "top -310%",
    end: "top -320%",
  },
});

tl3.to("#main", {
  backgroundColor: "black",
});

var boxes = document.querySelectorAll(".boxes");
boxes.forEach((el) => {
  el.addEventListener("mouseenter", function () {
  
    let attr = el.getAttribute("data-image");
    cursor.style.height = "250px";
    cursor.style.width = "250px";
    cursor.style.borderRadius = "10px";
    cursor.style.backgroundImage = `url(${attr})`;
  });
  el.addEventListener("mouseleave", function () {
    el.style.backgroundColor = "transparent";
    cursor.style.height = "20px";
    cursor.style.width = "20px";
    cursor.style.borderRadius = "50%";
    cursor.style.backgroundImage = "none";
  });
});

const work = document.getElementById("work");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const overlay = document.getElementById("overlay");
const marqueText = document.querySelectorAll(".marque-text");
work.addEventListener("mouseenter", () => {
  marqueText.forEach((el) => {
    el.textContent = " This is Work section. ";
  });
  overlay.style.display = "flex";
});

work.addEventListener("mouseleave", () => {
  overlay.style.display = "none";
  marqueText.forEach((el) => {
    el.textContent = "";
  });
});
about.addEventListener("mouseenter", () => {
  overlay.style.display = "flex";
  marqueText.forEach((el) => {
    el.textContent = " This is About section. ";
  });
});

about.addEventListener("mouseleave", () => {
  overlay.style.display = "none";
});
contact.addEventListener("mouseenter", () => {
  overlay.style.display = "flex";
  marqueText.forEach((el) => {
    el.textContent = " This is Contact section. ";
  });
});

contact.addEventListener("mouseleave", () => {
  overlay.style.display = "none";
});

gsap.to(marqueText, {
  x: -1000,
  duration: 5,
  repeat: -1,
  yoyo: true,
  ease: "linear",
});


const btn = document.getElementById('sayHello');

// On hover (scale effect)
btn.addEventListener('mouseenter', () => {
  gsap.to("#sayHello", {
    duration: 0.3,
    scale: 1.1,
    ease: "power2.out"
  });
});

btn.addEventListener('mouseleave', () => {
  gsap.to("#sayHello", {
    duration: 0.3,
    scale: 1,
    ease: "power2.inOut"
  });
});

// On click (bounce effect)
btn.addEventListener('click', () => {
  alert("Hello, Viewer! Welcome to our site!");
  gsap.fromTo("#sayHello", 
    { scale: 1 },
    {
      scale: 1.2,
      duration: 0.2,
      ease: "power1.out",
      yoyo: true,
      repeat: 1
    }
  );
});
