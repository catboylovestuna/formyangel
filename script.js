const messages = [
    "Whenever I wake up you're the first thing on my mind.",
    "Your cute little laugh is music to my ears.",
    "I saw a stray cat laying down by the pool in the sun the other day and it made me think of you.",
    "My sun, my moon, my stars,",
    "I don't think I could love another more, I adore you more than words can say but I hope things like this help express and show it.",
    "Can't get your pretty voice and face out my head.",
    "Whenever I'm spacing out at work half the time I'm smiling to myself like an idiot thinking watching you play videogames or playing VR chat with you.",
    "I wish I had more of a way with words but you are beyond fucking perfect I feel so lucky to have you in my life.",
    "You know god broke the mold when he made you?",
    "I love your beautiful brown eyes",
    "I love your pretty lips want to kiss them and run my fingers through your hair",
    "You are beyond fucking beautiful your voice makes me weak at the knees you have know idea",
    "You deserve head, a million dollars, breakfast, and a brand new videogame and car every single morning......",
    "You're funny and cute and fucking adorable I want you so bad it makes me look stupid",
    "You deserve the world and more",
    "Always thinking of you, hoping no one's given you any shit and hoping you're having a good day. You are always loved, cherished, and thought of my Angel.",
    "Did that ass bounce when it fell from heaven? ",
    "For as long as I breathe, my heart will always love you.",
    "I adore you pretty girl",
    "u want sum fuk",
    "bitchhhhhhhhhhhhhhhhhh <3",
    "u so fucking pretty god",
    "You wanna cum inside me over and over again and fuck me into the mattress then let me do the same to you?",
    "I wanna make you feel good darling",
    "You know I belong to you?",
    "You can put a leash and collar on me, a dog tag, you can put your name on my ass, leave permanant scratch marks down my back, leave hickeys and bruises and bite marks where everyone else can see.",
    `I always think of you.
In my sleep,
in my dreams,
I always think of you.
All night all day, hoping you're all right,
I always think of you,
Wishing that you were thinking of me too.
Every minute, every second of the day, I think of you.
I really do.
All because...I love you.`,
    "fag",
    "lets kiss about it..........",
    "God Angel, can I just put a baby in you already?",
    "I want forever you with you.",
    "Darling <3",
    "I love you so much."
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




        message.textContent = "I love you forever. ♡";

        nextButton.textContent = "♡";

        nextButton.disabled = true;

    }

});