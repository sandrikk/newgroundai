document.addEventListener('DOMContentLoaded', function(event) {
    // Array with texts to type in typewriter
    var dataText = [
        "Leading the Way to Excellence:",
        "Embrace the Future with AI-Powered Solutions",
    ];

    // Typewriter function
    function typeWriter(text, i, fnCallback) {
        var h1Element = document.querySelector("h1");

        if (i < text.length) {
            // Append next character to h1
            h1Element.innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true" class="typewriter-text"></span>';

            // Continue typing after a delay
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback);
            }, 100);
        } else if (typeof fnCallback === 'function') {
            // Text finished, call the callback function after a timeout
            setTimeout(fnCallback, 700);
        }
    }

    // Start the typewriter animation for a text in the dataText array
    function startTextAnimation(i) {
        if (typeof dataText[i] === 'undefined') {
            // Loop back to the beginning after a delay
            setTimeout(function() {
                startTextAnimation(0);
            }, 20000);
        }

        if (i < dataText.length) {
            // Start typewriter animation for the current text
            typeWriter(dataText[i], 0, function() {
                // After callback, start animating the next text
                startTextAnimation(i + 1);
            });
        }
    }

    // Start the text animation
    startTextAnimation(0);
});