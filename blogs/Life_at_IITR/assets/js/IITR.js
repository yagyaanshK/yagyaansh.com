function switchTheme(){    
    
    var theme =  document.getElementById('theme').getAttribute('href') ;    
    // alert("function called");   
    // alert(theme);     
    if(theme == 'assets/stylesheets/light.css'){
        document.getElementById('theme').href = 'assets/stylesheets/dark.css';
        // alert("switching to dark");
    }
    else{
        document.getElementById('theme').href = 'assets/stylesheets/light.css';
    }
}

// not required below this ----------------------------------------------

function addComment(){}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}