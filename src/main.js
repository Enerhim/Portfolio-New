function printLetterByLetter(destination, message, speed) {
    var i = 0;
    var interval = setInterval(function() {
        document.querySelector(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length) {
            clearInterval(interval);
        }
    }, speed);
}

printLetterByLetter(".header-description", "I can do Software Development, AI and Game Development", 60);