function switchTheme(){    
    
    var theme =  document.getElementById('theme').getAttribute('href') ;    
    // alert("function called");   
    // alert(theme);     
    if(theme == 'assets/stylesheets/blogs.css'){
        document.getElementById('theme').href = 'assets/stylesheets/blogs-dark.css';
        // alert("switching to dark");
    }
    else{
        document.getElementById('theme').href = 'assets/stylesheets/blogs.css';
    }
}