const navBar = document.querySelector(".nav");

const introSection = document.getElementById("service-intro-section");

const servicesContainer = document.querySelector(".services-container");
const servicesCards = document.querySelectorAll(".services-card");

const articleLines = document.querySelectorAll(".article-line");

const articleImages2 = document.querySelectorAll(".article-img");

const sellingProcessContainer = document.querySelector(".selling-process");
const buyingProcessContainer = document.querySelector(".buying-process");
const processesListLeft = document.querySelectorAll(".list-left");
const processesListRight = document.querySelectorAll(".list-right");

const contactSection = document.querySelector(".contact-content");

const introObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      navBar.classList.remove("nav-bar-others");
      navBar.classList.add("nav-bar-intro");
    } else {
      navBar.classList.remove("nav-bar-intro");
      navBar.classList.add("nav-bar-others");
    }
  },
  {
    threshold: 0.1,
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
    threshold: 0.5,
  }
);

const servicesObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      entries[0].target.classList.add("up-fade-in");
      servicesObserver.unobserve(entries[0].target)
      servicesCards.forEach((card, i) => {
        setTimeout(() => card.classList.add("right-fade-in"), (i+1) * 500);
      });
    }
  },
  {
    threshold: 0,
  }
);

const sellingProcessObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      entries[0].target.classList.add("zoom-in");
      sellingProcessObserver.unobserve(entries[0].target)
      processesListLeft.forEach((card, i) => {
        setTimeout(() => card.classList.add("right-fade-in"), (i+1) * 400);
      });
    }
  },
  {
    threshold: 0,
  }
);

const buyingProcessObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      entries[0].target.classList.add("zoom-in");
      buyingProcessObserver.unobserve(entries[0].target)
      processesListRight.forEach((card, i) => {
        setTimeout(() => card.classList.add("right-fade-in"), (i+1) * 500);
      });
    }
  },
  {
    threshold: 0,
  }
);

const lineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("line-animation");
        lineObserver.unobserve(entry.target);
      }
    })
  },
  {
    threshold: 1,
  }
);

const imageObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("up-fade-in");
        imageObserver.unobserve(entry.target);
      }
    })
  },
  {
    threshold: 0,
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
    block: "start",
    inline: "nearest",
  });
  navBar.classList.remove("nav-bar-intro");
  navBar.classList.add("nav-bar-others");
}

const contactObserver = new IntersectionObserver(
  (entries) => {
    if (entries[0].isIntersecting) {
      entries[0].target.classList.add("zoom-in");
      contactObserver.unobserve(entries[0].target);
    }
  },
  {
    threshold: 0,
  }
);

document.addEventListener("scroll", removeIntro);

introObserver.observe(introSection);

introMessageObserver.observe(introSection);

servicesObserver.observe(servicesContainer);

articleLines.forEach(line => {
  lineObserver.observe(line);
})

articleImages2.forEach(image => {
  imageObserver.observe(image);
})

sellingProcessObserver.observe(sellingProcessContainer);
buyingProcessObserver.observe(buyingProcessContainer);

contactObserver.observe(contactSection);