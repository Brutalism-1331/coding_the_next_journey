// Asking if person knows how to code to see if they want a job.

function doYouKnowHowToCode() {
    
var question = confirm ("Do you know how to code?");
var answer = question

if (question == true) { 
    answer = " Great Contact Us (604-333-2222!"
}
else {
    answer = " We Can Help You Learn (604)-333-2222! ";
}

return '<h3>' + answer + '</h3>';

}



