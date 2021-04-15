// This code should ask for name input and print Hello + input below top headding of page

function userName () {
    
    var person = prompt ("What is your name?");  
    var greeting;

    if (person !== '') { 
        greeting = 'Hello ' + person + '!' ; 
    }

    else {
        greeting = "Hello  Human!";
    }

    while (person === null) 
           {person = prompt ("What Is Your Name")
        greeting = "Hello Human!";
        }


    //else if (person = null)
    //     greeting = "Hello " + "Human" + "!";
  
    return '<h3>' + greeting + '</h3>';
}



