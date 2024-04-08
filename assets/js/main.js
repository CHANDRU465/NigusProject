$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 3
      }
    }
  });
});




var $animation_elements = $('.animation-element');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('in-view');
    } else {
      $element.removeClass('in-view');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');








// function ImagesliderApp(el) {
//   this.el = el;

//   el.addEventListener("mousemove", updateSlider.bind(this));
//   el.addEventListener("touchstart", updateSlider.bind(this));
//   el.addEventListener("touchmove", updateSlider.bind(this));
// }

// function updateSlider(e) {
//   const rightImageContainer = this.el.querySelector(".before-wrap");
//   const { left, width } = rightImageContainer.getBoundingClientRect();
//   const pageX = e.type === "mousemove" ? e.pageX : e.changedTouches[0].pageX;
//   const position = ((pageX - left) / width) * 100;

//   if (position < 100 && position > 0) {
//       this.el.querySelector(".after-wrap").style.width = `${position}%`;
//       this.el.querySelector(".handler").style.left = `${position}%`;
//   }
// }

// document.addEventListener("DOMContentLoaded", function() {
//   var hero = document.getElementById("hero-section");
//   ImagesliderApp(hero);
// });



document.addEventListener("DOMContentLoaded", function () {
  const section = document.getElementById("section");
  const greenDiv = document.getElementById("greenDiv");
  const image1 = document.getElementById("image1");
  const image2 = document.getElementById("image2");

  section.addEventListener("mousemove", function (event) {
    const sectionBounds = section.getBoundingClientRect();
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Check if the mouse is within the section boundaries
    if (mouseX >= sectionBounds.left && mouseX <= sectionBounds.right &&
        mouseY >= sectionBounds.top && mouseY <= sectionBounds.bottom) {
      const x = mouseX - sectionBounds.left;

      // Check mouse direction
      if (x < sectionBounds.width / 2) {
        // Mouse on the left side of the section
        image1.style.display = "block";
        image2.style.display = "none";
      } else {
        // Mouse on the right side of the section
        image2.style.display = "block";
        image1.style.display = "none";
      }

      // Show greenDiv and adjust its width
      greenDiv.style.display = "block";
      greenDiv.style.width = x + "px";
    } else {
      // If the mouse is outside the section boundaries, hide the images and greenDiv
      image1.style.display = "none";
      image2.style.display = "none";
      greenDiv.style.display = "none";
    }
  });
});