function switchTheme(){
    var theme =  document.getElementById('theme').getAttribute('href') ;    
    // alert("function called");   
    // alert(theme);     
    if(theme == 'assets/stylesheets/main.css'){
        document.getElementById('theme').href = 'assets/stylesheets/main-dark.css';
        document.getElementById('imgtheme').src = 'assets/images/blah.png';
        localStorage["theme"] = dark;
        // alert("switching to dark");
        
    }
    else{
        document.getElementById('theme').href = 'assets/stylesheets/main.css';
        document.getElementById('imgtheme').src = 'assets/images/art.png';
        localStorage["theme"] = light;
    }
}

// function switchTheme(){
//     var theme =  document.getElementById('theme').getAttribute('title') ;    
//     alert("function called");   
//     alert(theme);     
//     if(theme == 'light'){
//         document.getElementById('theme').href = 'assets/stylesheets/dark.css';
//         document.getElementById('theme').title = 'dark'; //why is this line causing problems??
//         document.getElementById('imgtheme').src = 'assets/images/blah.png';
//         alert("switching to dark");
//     }
//     else{
//         document.getElementById('theme').href = 'assets/stylesheets/main.css';
//         document.getElementById('theme').title = 'light';
//         document.getElementById('imgtheme').src = 'assets/images/art.png';
//     }
// }