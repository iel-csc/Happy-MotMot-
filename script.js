/* =========================
   WEBSITE NAVIGATION
========================= */

function showScreen(id) {

    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

}


/* =========================
   OPEN LETTER
========================= */

function openLetter() {

    showScreen("paperScreen");

}


/* =========================
   UNCRUMPLE PAPER
========================= */

function uncrumple() {

    const paper = document.getElementById("paper");

    paper.classList.remove("crumpled");

    paper.classList.add("uncrumpling");

    setTimeout(() => {

        showScreen("page1");

    }, 1600);

}


/* =========================
   LETTER PAGES
========================= */

function nextPage(page) {

    const next = page + 1;

    if (next <= 7) {

        showScreen("page" + next);

    } else {

        showScreen("reasonsIntro");

    }

}


/* =========================
   143 REASONS
========================= */

const reasons = [

"I love your eyes",

"I love the way you look at me",

"I love the way you talk to me",

"I love your sweet voice",

"I love your cute smile",

"I love your laugh",

"I love your touch",

"I love your beautiful heart",

"I love how pabebe you are",

"I love admiring you while you’re eating",

"I love how beautiful you are when you fix your hair",

"I love how caring you are",

"I love how worried you are when something happens",

"I love that you’re so perfect",

"I love that you’re so effortlessly good at something",

"I love making you laugh or smile when I make a joke",

"I love when we’re fighting over small things",

"I love it when you kiss me",

"I love your hugs",

"I love your touch when you scratch my head so gently",

"I love how similar we are with things",

"I love your comfort",

"I love being around you",

"I love eating recess/lunch everyday with you",

"I love spending time with you",

"I love buying you food, especially when I see that excitement",

"I love buying you stuff/making you stuff to make you happy",

"I love the fact that you’re so grateful for everything that I give you",

"I love watching movies with you",

"I love sleep calling with you",

"I love cuddling with you",

"I love holding your hand",

"I love giving you my hoodie, because you look cute wearing it",

"I love when you notice small things about me",

"I love when you tell me everything",

"I love when I hear you talking about your day",

"I love talking to you",

"I love every small gesture you do",

"I love your facial expressions when I’m being a gentlewoman to you",

"I love when you pinch my cheeks when you’re nagigigil",

"I love when you drink your Chuckie, so cute",

"I love when you let me tie your hair",

"I love when you make me feel safe",

"I love when you trust me",

"I love when you text me as soon as you get home",

"I love how supportive you are",

"I love how you’ll think about it the whole day when I do something for you that they couldn’t do",

"I love how you taught me how to love",

"I love making you mad, you look like a little bunni",

"I love when you let me feed you",

"I love when you hold my hand even if people are around",

"I love how confident you are",

"I love how caring you can get",

"I love how you make paraan to meet me",

"I love when you’re still playing Roblox with me even though you don’t like the game",

"I love making silly TikToks with you",

"I love how clean you dress",

"I love how naturally beautiful you are",

"I love how happy you are pag nasunod want mo",

"I love how you make me feel so special",

"I love how comfortable you are with me",

"I love how you give me secret kisses",

"I love how clingy you are",

"I love how forward you are",

"I love hearing you say my name, “baby”",

"I love when you tell me secrets even if it’s none of our business",

"I love how you’re so easy to love",

"I love how my heart naturally felt for you",

"I love when you copy me, my little copycat",

"I love when you’re still here even on the hardest days",

"I love doing assignments with you",

"I love looking deep into your brown eyes",

"I love having “I love you” wars with you",

"I love going to the chapel with you",

"I love how we were already so close together the day I met you",

"I love calling you my “future wifey”",

"I love how we already made it this far",

"I love how we spend our days texting and mutecalling",

"I love when we kiss each other on mutecall",

"I love how you’re so happy with the ring",

"I love how honest you are with me",

"I love when we plan future dates",

"I love when we go to a place you like",

"I love when I follow you",

"I love how you pull my hand in a crowded place",

"I love how I keep spotting you in the crowds",

"I love how you’re so loud when you hear your favorite music",

"I love when we play ML",

"I love when we say goodnight/goodmorning to each other",

"I love the “kamusta” every time after a hangout",

"I love how you’re so good at writing",

"I love seeing you cook, my future wife",

"I love supporting you in everything you do",

"I love when you cry on my shoulder",

"I love how focused you are",

"I love how you tease me",

"I love holding hands with you at class time",

"I love how we have the same opinions on our classmates",

"I love how you tell me I’m the most handsome person you’ve ever met",

"I love being with you at all times and every day",

"I love kissing your face everywhere",

"I love the taste of your cooking",

"I love how lovable you are",

"I love how good you are at grammar",

"I love how you handle serious situations",

"I love that I know you’re the woman I’ll be marrying",

"I love that you tell me every tiny little detail of something I said",

"I love that you’re so thoughtful",

"I love that you’re so sweet to me",

"I love when you comfort me with your sweet words",

"I love that we’re each other’s kakampi",

"I love that you’re comfortable enough to talk about dinosaurs to me",

"I love how we fight for each other",

"I love sharing what we dreamt of when we just woke up",

"I love watching TikTok with you",

"I love when you cry on my shoulder, knowing what you’re going through",

"I love when you’re doing something that makes you happy",

"I love when we’re together every second of the day we’re magkasama",

"I love that we only care about each other, and not care about anyone when we’re together",

"I love the part where I fell so deeply for you",

"I love that I can be a part of your life forever",

"I love that we won’t leave each other alone",

"I love how clean you look",

"I love when you talk about something you love to me",

"I love when you admire me when I’m not looking",

"I love kissing your beautiful hand",

"I love every version of you",

"I love you that I’ll accept every flaw of yours",

"I love how I can treat you better than anyone could",

"I love when you’re trying and not giving up",

"I love how we’re so in love with each other",

"I love that we’ll never let us down",

"I love that your birthmark on your mouth was the first thing I noticed about you, and I loved it",

"I love listening to music using earphones with you",

"I love that we’ll be together forever, in every universe",

"I love when we make pinky promises",

"I love that you’re so soft when it comes to me",

"I love i-baby ikaw",

"I love telling you how gorgeous you truly are",

"I love hugging you when you feel so sad",

"I love when your eyes sparkle when you see me",

"I love when you’re curious when I have a surprise for you",

"Lastly, these 143 reasons aren’t enough to show my love for you. I love you more than these words that I say. I love you so much, my baby. I hope that you know that I am always here for you. I’m your pahinga and kakampi sa lahat. :)"

];


/* =========================
   REASON SYSTEM
========================= */

let reasonIndex = 0;


function startReasons() {

    reasonIndex = 0;

    showScreen("reasonsPage");

    updateReason();

}


function updateReason() {

    const number =
        document.getElementById("reasonNumber");

    const text =
        document.getElementById("reasonText");

    const previous =
        document.getElementById("prevButton");

    number.textContent =
        (reasonIndex + 1) + " / " + reasons.length;

    text.textContent =
        reasons[reasonIndex];

    previous.disabled =
        reasonIndex === 0;

    if (reasonIndex === reasons.length - 1) {

        document.querySelector(
            ".reason-buttons button:nth-child(2)"
        ).textContent = "Finish 💗";

    } else {

        document.querySelector(
            ".reason-buttons button:nth-child(2)"
        ).textContent = "Next 💗";

    }

}


function nextReason() {

    if (reasonIndex < reasons.length - 1) {

        reasonIndex++;

        updateReason();

    } else {

        showScreen("finalPage");

        createFinalHearts();

    }

}


function previousReason() {

    if (reasonIndex > 0) {

        reasonIndex--;

        updateReason();

    }

}


/* =========================
   FLOATING HEARTS
========================= */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    const heartTypes = [
        "♡",
        "♥",
        "❤",
        "💕"
    ];

    heart.innerHTML =
        heartTypes[
            Math.floor(
                Math.random() * heartTypes.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 18 + 12) + "px";

    heart.style.animationDuration =
        (Math.random() * 5 + 5) + "s";

    document
        .querySelector(".hearts")
        .appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 10000);

}


setInterval(createHeart, 700);


/* =========================
   FINAL HEART EXPLOSION
========================= */

function createFinalHearts() {

    for (let i = 0; i < 35; i++) {

        setTimeout(() => {

            createHeart();

        }, i * 100);

    }

}
