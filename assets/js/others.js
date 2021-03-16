function switchTheme(){    
    
    var theme =  document.getElementById('theme').getAttribute('href') ;    
    // alert("function called");   
    // alert(theme);     
    if(theme == 'assets/stylesheets/others.css'){
        document.getElementById('theme').href = 'assets/stylesheets/others-dark.css';
        // alert("switching to dark");
    }
    else{
        document.getElementById('theme').href = 'assets/stylesheets/others.css';
    }
}