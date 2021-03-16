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

function addComment(){}