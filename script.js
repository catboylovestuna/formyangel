const messages = [
    "ya mama",
    "me n yo mother fucking mama together",
    "bleh",
    ":|"
];







const message = document.getElementById("message");




const nextButton = document.getElementById("nextButton");




let currentMessage = 0;







message.textContent = messages[currentMessage];






nextButton.addEventListener("click", function () {




    currentMessage++;





    if (currentMessage < messages.length) {

       
        message.textContent = messages[currentMessage];

       
        if (currentMessage === messages.length - 1) {

            nextButton.textContent = "One More Thing...";

        }

    } else {




        message.textContent = "💩";

        nextButton.textContent = "♡";

        nextButton.disabled = true;

    }

});
