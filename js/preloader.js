
/* Pre-Loader*/

var myVar;

function myFunction1() {
  myVar = setTimeout(showPage, 100);
}

function showPage() {
  document.getElementById("loader-text").style.display = "none";
  document.getElementById("myDiv").style.display = "block";

}


/* Scroll Indicator*/ 

window.onscroll = function() {
    myFunction();
    scrollFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  // console.log(scrolled)
  document.getElementById("myBar").style.width = scrolled + "%";
}

/*scroll to top */

// When the user scrolls down 20px from the top of the document, show the button

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}