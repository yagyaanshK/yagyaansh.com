function switchTheme(){
    var theme =  document.getElementById('theme').getAttribute('href') ;    
    // alert("function called");   
    // alert(theme);     
    if(theme == 'assets/stylesheets/main.css'){
        document.getElementById('theme').href = 'assets/stylesheets/dark.css';
        document.getElementById('imgtheme').src = 'assets/images/blah.png';
        // alert("switching to dark");
    }
    else{
        document.getElementById('theme').href = 'assets/stylesheets/main.css';
        document.getElementById('imgtheme').src = 'assets/images/art.png';
    }
}