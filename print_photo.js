// Asking user what language they would like to learn to code

    function language()  {
      let question = prompt("What language would you like to learn: Java, JS, html, css");
      let image ;
      let holder = " " ;

      while (question !== "Java" && question !== "JS" && question !== "html" && question !== "css" ) {
        question = prompt("Please enter Java, JS, html, css");
      }
      if (question === 'JS') {
               image = '<img src = "/image_folder/js.png" alt="art">'
              
      } 
      else if (question === 'java') {
               image = '<img src = "./image_folder/java.png" alt="art">'
      }
      else if (question === 'html') {
             image = '<img src= ./image_folder/html.png alt="art">'
      }
      else if (question === 'css') {
              image = '<img src = "./image_folder/css.png" alt="art">'
      }
      
      let time = studyTime();
      for (var i = 0; i < time; i++) {
        holder = holder + image;   
      }
      
        
     return holder;
      
    }
    
    
 
  
    function studyTime() {
     studyTime = prompt ("How Many Hours Would You Like To Study?")
        return studyTime;

        
      
    }
