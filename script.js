let togglediv = document.querySelector('.toggle')
let togglebtn = document.querySelector('#toggle');
let body = document.querySelector('body')

let isOn = false;

togglebtn.addEventListener('click', function () {
    if (!isOn) {
        body.style.backgroundColor = " rgb(7, 6, 17)"
        body.style.color = "white"
        togglediv.style.border = "2px solid white";
        togglebtn.style.backgroundColor = "white"
        togglebtn.classList.toggle('move')
    }
    else {
        body.style.backgroundColor = "white"
        body.style.color = "black"
        togglediv.style.border = "2px solid black";
        togglebtn.style.backgroundColor = "rgb(50, 50, 93)"
        togglebtn.classList.toggle('move')
    }

    isOn = !isOn;
});





let btn = document.querySelector('button');
let span = document.querySelector('span')
let Password;

class password {
    constructor() {
        console.log("Welcome to password generator");
    }

    generateStrongPassword() {
        span.style.color = "rgb(16, 186, 11)"
        let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '~', '/'];
        let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


        let a = '';
        for (let i = 0; i <= 5; i++) {
            a += letters[Math.floor(Math.random() * letters.length)]
        }

        let b = '';
        for (let i = 0; i <= 0; i++) {
            b += specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
        }

        let c = '';
        for (let i = 0; i <= 2; i++) {
            c += numbers[Math.floor(Math.random() * numbers.length)]
        }

        Password = a + b + c;

        span.innerHTML = `'${Password}'`;

    }


    generateWeakPassword() {
        span.style.color = "rgb(16, 186, 11)"
        let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


        let a = '';
        for (let i = 0; i <= 2; i++) {
            a += letters[Math.floor(Math.random() * letters.length)]
        }

        let b = '';
        for (let i = 0; i <= 1; i++) {
            b += numbers[Math.floor(Math.random() * numbers.length)]
        }

        Password = a + b;
        span.innerHTML = `'${Password}'`;

    }


    generateFunnyPassword() {
        span.style.color = "rgb(16, 186, 11)"
        let funnyPasswords = [
            "Password123!", "OpenSesame!", "NotAPassword", "ILovePizza1", "GuessMeIfYouCan",
            "12345Wrong", "WhySoSerious?", "MonkeyBusiness007", "CantTouchThis!", "LetMeInPlz",
            "HackMeNot!", "ThisIsFun1", "OopsIDidItAgain", "WrongPassword42", "ILikeTurtles!",
            "PasswordHunter3000", "KnockKnock123", "TryAgainLoser", "SuperSecret!", "BatmanAndRobin1",
            "CouchPotato1", "NopeNotToday", "BananaPants123", "ShhItsASecret", "IAmGroot42",
            "ChickenDance!", "WhoIsAwesome?", "DancingPineapple", "SpyOnMe1", "Error404Password",
            "ICantRemember1", "ILostMyKeys!", "TheCakeIsALie", "Over9000!", "Pikachu123",
            "MustardTiger!", "SassyUnicorn", "ItsMeMario1", "LOLNope!", "InvisiblePassword",
            "ImWatchingYou", "LostInSpace", "TakeItEasy1", "ILikeCats!", "LaughOutLoud!",
            "PopcornTime123", "HelloThere!", "GoAway123", "YouCantSeeMe", "MagicCarpet!",
            "SlipperyFish", "RainbowNinja", "FlyingPigs123", "OopsWrongOne", "WhosAsking?",
            "WhereAmI?", "YoloSwag123", "IDontExist", "JustKidding123",
            "WafflesAreLife", "EpicFail123", "IlovePizza", "ILoveCats", "ILoveYouToo", "HugMePlz", "YouGotThis",
            "LetsGo", "NopeNotToday", "DontTouchThat", "ImWatchingYou",
            "ILikeCookies", "DontTellAnyone", "WhyYouNo", "IAmBatman",
            "ShhDontTell", "ImNotHere", "WhySoSerious", "HighFive", "YouCantSeeMe",
            "ILiveHere", "SecretAgent", "JustKidding", "DontMove", "CatchMeIfYouCan",
            "ImOuttaHere", "KnockKnock", "AlmostThere", "YouAreAwesome", "iloveyou", "SecretSauce",
            "ThatsIt", "TryMe", "ItsMeAgain", "NoWorries", "ImBehindYou", "YouDidIt",
            "DontMindMe", "NotGonnaLie", "ReallyNow", "HaventYouHeard", "IAmTheOne",
            "CantStopMe", "AlmostDone", "YouSnoozeYouLose", "LetsDoThis", "FeelingLucky", "ILikeCoffee!", "OopsIDidIt", "BananaBread!",
            "KeyboardWarrior", "NotToday123", "SmellsLikeCode", "OopsTryAgain", "WhyNotZoidberg",
            "NinjaTurtles!", "Hoverboard123", "CtrlAltDelete", "PasswordLover1", "IDidntDoIt!",
            "OopsAllCaps!", "ILoveChoco", "HiddenDragon!", "TooManySecrets", "RollingStone1",
            "PandaPower!", "RandomPerson1", "NoOneKnows!", "SafeAndSound", "UnderMyBed",
            "Surprise123!", "LazyGenius1", "QuirkyBanana", "TacoTuesday!", "KeepItSecret",
            "BubbleWrap!", "OopsIDidThat", "JediKnight42", "TacoCat123", "UnicornPower!",
            "BananaSplit!", "CaptainObvious", "IDKWhatImDoing", "ILikeToMoveIt",
            "SpaceInvader1", "OopsICoded", "CookiesAndMilk", "WeirdButFun1", "BigChungus42", "Admin",
            "Password", "secret", "incorrect", "123456", "qwerty", "letmein", "secret", "guest", "nopass",
            "oops", "whyme", "test", "user", "pass", "default", "hello", "welcome",
            "unknown", "login", "dummy", "noentry", "blabla", "abc123", "idk", "guess",
            "nothing", "open", "unlock", "fakepass", "tryagain", "wrong", "whatever",
            "hahaha", "noway", "hidden", "noidea", "lost", "key123", "guessme",
            "lazy123", "notme", "whoami", "blank", "error", "silly", "empty",
            "lasttry", "donottry", "oopsie", "gotcha", "haha123"
        ];
        let a = '';

        a = funnyPasswords[Math.floor(Math.random() * funnyPasswords.length)];

        Password = a;

        span.innerHTML = `'${Password}'`;

    }


}

let pass = new password();



btn.addEventListener('click', function () {
    if (span.innerHTML == "Null") {
        span.innerHTML = "Please select an option first!"
        span.style.color = "red"
    }
})

let strongPassword = document.querySelector('#strongPassword')
let weakPassword = document.querySelector('#weakPassword')
let funnyPassword = document.querySelector('#funnyPassword');

strongPassword.addEventListener('click', function () {
    btn.addEventListener('click', (pass.generateStrongPassword));
})

weakPassword.addEventListener('click', function () {
    btn.addEventListener('click', (pass.generateWeakPassword));
})

funnyPassword.addEventListener('click', function () {
    btn.addEventListener('click', (pass.generateFunnyPassword));
})


