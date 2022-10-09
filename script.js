const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    yname = document.getElementById('name'),
    focus = document.getElementById('focus');
todo = document.querySelector(".todo");

//event listeners
yname.addEventListener("keypress", setName); //store value when enter is pressed
yname.addEventListener("blur", setName);  // to store the values when someone clicks anywhere on the screen

focus.addEventListener("keypress", setFocus);
focus.addEventListener("blur", setFocus);


showTime();
showBG();
getFocus();
getName();

//to show time
function showTime() {
    let today = new Date(),
        hours = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    //setting AM/PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    //12 hr format
    hours = hours % 12 || 12;
    time.innerHTML = `${addZ(hours)}:${addZ(min)}:${addZ(sec)} ` + ampm;

    setTimeout(showTime, 1000);
}

//add zeros
function addZ(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function showBG() {
    let today = new Date(),
        hours = today.getHours();

    if (hours >= 4 && hours < 12) {
        document.body.style.background = "url(morning.jpg)  no-repeat center center/cover";
        greeting.textContent = "Good Morning, ";
        document.body.style.color = " white";

    } else if (hours >= 12 && hours < 19) {
        document.body.style.background = "url(noon3.jpg) no-repeat center center/cover";


        document.body.style.color = " white";

        greeting.textContent = "Good Afternoon, ";

    }
    else {
        document.body.style.background = "url(night2.jpg)  no-repeat center center/cover";
        document.body.style.color = " white";

        greeting.textContent = "Good Evening, ";

    }
}

function getFocus() {
    if (localStorage.getItem('focus') == null) {
        focus.textContent = "[Enter your focus for the day]";
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}
function getName() {
    if (localStorage.getItem('yname') == null) {
        yname.textContent = "[Enter your name]";
    } else {
        yname.textContent = localStorage.getItem('yname');
    }
}
function setName(e) {
    if (e.type == "keypress") {
        if (e.keyCode == 13) {  //enter key
            localStorage.setItem('yname', e.target.innerText);
            yname.blur();

        } else {
            localStorage.setItem('yname', e.target.innerText);

        }
    }
}
function setFocus(e) {
    if (e.type == "keypress") {
        if (e.keyCode == 13) {  //enter key
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();

        } else {
            localStorage.setItem('focus', e.target.innerText);

        }
    }
}

// function opentodo(e){

// }

