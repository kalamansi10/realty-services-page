const removeIntro = function() {
  // Calculate the opacity based on the scroll position
  var opacity = 1 - (window.scrollY / document.querySelector('.service-intro').offsetHeight);
  // Set the opacity of the service-intro element
  document.querySelector('.service-intro').style.opacity = opacity;
}

window.addEventListener('scroll', removeIntro);

function smoothScroll() {
  const element = document.getElementById("test-section");
  element.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}