function myFunction() {
    var x = document.getElementById("nav-toggle");
    if (x.style.display === "none") {
      x.style.display = "grid";

    } else {
      x.style.display = "none";
    }
  }


  var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  wrap: true,
  pause: true
})