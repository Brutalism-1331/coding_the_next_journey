    var today = new Date();
    var hourNow = today.getHours();
    var greeting;

        if (hourNow > 18) {
            greeting = "It's Never To Late To Code!";
        } else if (hourNow > 12) {
            greeting = ' Still Lots Of Time Left To Finish The Code You Are Stuck On!';
        } else if (hourNow > 0) {
            greeting = "It's A Great Day For Coding!";
        } else {
            greeting = 'What Time Is It! ';
        }
        document.write ('<h3>' + greeting + '</h3>');

