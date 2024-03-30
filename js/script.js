const navBar = document.querySelector(".nav-bar")
const introSection = document.getElementById("service-intro-section");
const servicesContainer = document.querySelector(".services-container");
const servicesCards = document.querySelectorAll(".services-card");

const introObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      navBar.classList.remove("nav-bar-others");
      navBar.classList.add("nav-bar-intro");
      document.addEventListener("scroll", removeIntro);
    } else {
      navBar.classList.remove("nav-bar-intro");
      navBar.classList.add("nav-bar-others");
      document.removeEventListener("scroll", removeIntro);
    }
  },
  {
    threshold: 0,
  }
);

const introMessageObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      document.getElementById("intro1-message").classList.add("down-fade-in");
      document.getElementById("intro2-message").classList.add("up-fade-in");
      introMessageObserver.unobserve(introSection);
    }
  },
  {
    threshold: 1,
  }
);

const servicesObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("zoom-in")
        servicesObserver.unobserve(entry.target);
      }
    })
  },
  {
    threshold: .6,
  }
);

function removeIntro() {
  // Calculate the opacity based on the scroll position
  var opacity =
    1 -
    window.scrollY /
      document.getElementById("service-intro-section").offsetHeight;
  // Set the opacity of the service-intro-section element
  document.getElementById("service-intro-section").style.opacity = opacity;
}

function smoothScroll() {
  const element = document.getElementById("services-section");
  element.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
  navBar.classList.remove("nav-bar-intro");
  navBar.classList.add("nav-bar-others");
}

introObserver.observe(introSection);
introMessageObserver.observe(introSection);
servicesCards.forEach(card => {
  servicesObserver.observe(card);
})

