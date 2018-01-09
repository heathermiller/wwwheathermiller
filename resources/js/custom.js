document.addEventListener('DOMContentLoaded', function () {

  // Date for footer	
	
  // get current year and put it in span
  var currYear = new Date().getFullYear();
  $(".current-year").text(currYear);		
	

  // Navbar

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

	// Add a click event on each of them
	$navbarBurgers.forEach(function ($el) {
	  $el.addEventListener('click', function () {

		// Get the target from the "data-target" attribute
		var target = $el.dataset.target;
		var $target = document.getElementById(target);

		// Toggle the class on both the "navbar-burger" and the "navbar-menu"
		$el.classList.toggle('is-active');
		$target.classList.toggle('is-active');

	  });
	});
  }
	
	
  // Scrolling
	
  var rootEl = document.documentElement;
  var navbarEl = document.getElementById('entireNavbar');
  var navbarBurger = document.getElementById('navbarBurger');
  var specialShadow = document.getElementById('specialShadow');
  var NAVBAR_HEIGHT = 52;
  var THRESHOLD = 160;
  var navbarOpen = false;
  var horizon = NAVBAR_HEIGHT;
  var whereYouStoppedScrolling = 0;
  var scrollFactor = 0;
  var currentTranslate = 0;

  navbarBurger.addEventListener('click', function (el) {
    navbarOpen = !navbarOpen;

    if (navbarOpen) {
      rootEl.classList.add('bd-is-clipped-touch');
    } else {
      rootEl.classList.remove('bd-is-clipped-touch');
    }
  });

  function upOrDown(lastY, currentY) {
    if (currentY >= lastY) {
      return goingDown(currentY);
    }
    return goingUp(currentY);
  }

  function goingDown(currentY) {
    var trigger = NAVBAR_HEIGHT;
    whereYouStoppedScrolling = currentY;

    if (currentY > horizon) {
      horizon = currentY;
    }

    translateHeader(currentY, false);
  }

  function goingUp(currentY) {
    var trigger = 0;

    if (currentY < whereYouStoppedScrolling - NAVBAR_HEIGHT) {
      horizon = currentY + NAVBAR_HEIGHT;
    }

    translateHeader(currentY, true);
  }

  function constrainDelta(delta) {
    return Math.max(0, Math.min(delta, NAVBAR_HEIGHT));
  }

  function translateHeader(currentY, upwards) {
    // let topTranslateValue;
    var translateValue = void 0;

    if (upwards && currentTranslate == 0) {
      translateValue = 0;
    } else if (currentY <= NAVBAR_HEIGHT) {
      translateValue = currentY * -1;
    } else {
      var delta = constrainDelta(Math.abs(currentY - horizon));
      translateValue = delta - NAVBAR_HEIGHT;
    }

    if (translateValue != currentTranslate) {
      var navbarStyle = '\n        transform: translateY(' + translateValue + 'px);\n      ';
      currentTranslate = translateValue;
      navbarEl.setAttribute('style', navbarStyle);
    }

    if (currentY > THRESHOLD * 2) {
      scrollFactor = 1;
    } else if (currentY > THRESHOLD) {
      scrollFactor = (currentY - THRESHOLD) / THRESHOLD;
    } else {
      scrollFactor = 0;
    }

    var translateFactor = 1 + translateValue / NAVBAR_HEIGHT;
    specialShadow.style.opacity = scrollFactor;
    specialShadow.style.transform = 'scaleY(' + translateFactor + ')';
  }

  translateHeader(window.scrollY, false);

  var ticking = false;
  var lastY = 0;

  window.addEventListener('scroll', function () {
    var currentY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function () {
        upOrDown(lastY, currentY);
        ticking = false;
        lastY = currentY;
      });
    }

    ticking = true;
  });
});