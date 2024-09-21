"use strict";
//dark mode
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
window.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const enableDarkMode = () => {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        if (darkModeToggle)
            darkModeToggle.checked = true;
        document.getElementById("topbar").style.backgroundColor = "#222";
        document.getElementById("next").style.backgroundColor = "#222";
    };
    const disableDarkMode = () => {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
        if (darkModeToggle)
            darkModeToggle.checked = false;
        document.getElementById("topbar").style.backgroundColor = "black";
        document.getElementById("next").style.backgroundColor = "#222";
        document.getElementById("next").style.color = "white";
    };
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        enableDarkMode();
    }
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', () => {
            if (darkModeToggle.checked) {
                enableDarkMode();
            }
            else {
                disableDarkMode();
            }
        });
    }
});
(_a = document.getElementById("out")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    window.location.href = ("../../../index.html");
});
//topbar user name
const user = document.getElementById("user");
const username2 = localStorage.getItem("username");
const username3 = JSON.parse(username2);
user.textContent = `${username3}`;
const titlename2 = localStorage.getItem("clickquiz");
const titlename3 = JSON.parse(titlename2);
//   question page
const course = localStorage.getItem(`${titlename3}`);
const course1 = JSON.parse(course);
// console.log(course1);
const head1 = document.getElementById("heading");
const question1 = document.getElementById("question");
const button1 = document.getElementById("option1");
const button2 = document.getElementById("option2");
const button3 = document.getElementById("option3");
const button4 = document.getElementById("option4");
button1.classList.add("buttons");
button2.classList.add("buttons");
button3.classList.add("buttons");
button4.classList.add("buttons");
let count1 = 0;
head1.textContent = "Quiz : " + titlename3;
question1.textContent = (count1 + 1) + ". " + ((_b = course1[count1]) === null || _b === void 0 ? void 0 : _b.question1);
button1.textContent = "A. " + ((_c = course1[count1]) === null || _c === void 0 ? void 0 : _c.option1);
button2.textContent = "B. " + ((_d = course1[count1]) === null || _d === void 0 ? void 0 : _d.option2);
button3.textContent = "C. " + ((_e = course1[count1]) === null || _e === void 0 ? void 0 : _e.option3);
button4.textContent = "D. " + ((_f = course1[count1]) === null || _f === void 0 ? void 0 : _f.option4);
button1.value = (_g = course1[count1]) === null || _g === void 0 ? void 0 : _g.option1;
button2.value = (_h = course1[count1]) === null || _h === void 0 ? void 0 : _h.option2;
button3.value = (_j = course1[count1]) === null || _j === void 0 ? void 0 : _j.option3;
button4.value = (_k = course1[count1]) === null || _k === void 0 ? void 0 : _k.option4;
document.getElementById("back").style.display = "none";
const next = document.getElementById("next");
const buttons1 = document.querySelectorAll(".buttons");
document.getElementById("submit").style.display = "none";
next.addEventListener("click", () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    if (count1 < course1.length - 1) {
        count1++;
        document.getElementById("next").style.display = "block";
        document.getElementById("submit").style.display = "none";
    }
    if (count1 == course1.length - 1) {
        document.getElementById("next").style.display = "none";
        document.getElementById("submit").style.display = "block";
    }
    question1.textContent = (count1 + 1) + ". " + ((_a = course1[count1]) === null || _a === void 0 ? void 0 : _a.question1);
    button1.textContent = "A. " + ((_b = course1[count1]) === null || _b === void 0 ? void 0 : _b.option1);
    button2.textContent = "B. " + ((_c = course1[count1]) === null || _c === void 0 ? void 0 : _c.option2);
    button3.textContent = "C. " + ((_d = course1[count1]) === null || _d === void 0 ? void 0 : _d.option3);
    button4.textContent = "D. " + ((_e = course1[count1]) === null || _e === void 0 ? void 0 : _e.option4);
    button1.value = (_f = course1[count1]) === null || _f === void 0 ? void 0 : _f.option1;
    button2.value = (_g = course1[count1]) === null || _g === void 0 ? void 0 : _g.option2;
    button3.value = (_h = course1[count1]) === null || _h === void 0 ? void 0 : _h.option3;
    button4.value = (_j = course1[count1]) === null || _j === void 0 ? void 0 : _j.option4;
    if (answer1[count1] == undefined) {
        buttons1.forEach(items => {
            const btn1 = items;
            btn1.style.backgroundColor = "white";
        });
    }
    else {
        buttons1.forEach(items => {
            const btn1 = items;
            if (btn1.value == answer1[count1]) {
                btn1.style.backgroundColor = "gray";
                // btn1.style.hover
            }
            else {
                btn1.style.backgroundColor = "white";
            }
        });
    }
});
//prev button
const prev = document.getElementById("prev");
prev.addEventListener("click", () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    if (count1 > 0) {
        count1--;
        document.getElementById("next").style.display = "block";
        document.getElementById("submit").style.display = "none";
    }
    question1.textContent = (count1 + 1) + ". " + ((_a = course1[count1]) === null || _a === void 0 ? void 0 : _a.question1);
    button1.textContent = "A. " + ((_b = course1[count1]) === null || _b === void 0 ? void 0 : _b.option1);
    button2.textContent = "B. " + ((_c = course1[count1]) === null || _c === void 0 ? void 0 : _c.option2);
    button3.textContent = "C. " + ((_d = course1[count1]) === null || _d === void 0 ? void 0 : _d.option3);
    button4.textContent = "D. " + ((_e = course1[count1]) === null || _e === void 0 ? void 0 : _e.option4);
    button1.value = (_f = course1[count1]) === null || _f === void 0 ? void 0 : _f.option1;
    button2.value = (_g = course1[count1]) === null || _g === void 0 ? void 0 : _g.option2;
    button3.value = (_h = course1[count1]) === null || _h === void 0 ? void 0 : _h.option3;
    button4.value = (_j = course1[count1]) === null || _j === void 0 ? void 0 : _j.option4;
    if (answer1[count1] == undefined) {
        buttons1.forEach(items => {
            const btn1 = items;
            btn1.style.backgroundColor = "white";
        });
    }
    else {
        buttons1.forEach(items => {
            const btn1 = items;
            if (btn1.value == answer1[count1]) {
                btn1.style.backgroundColor = "gray";
            }
            else {
                btn1.style.backgroundColor = "white";
            }
        });
    }
});
var score = 0;
let answer1 = [];
buttons1.forEach(btn => {
    const btn1 = btn;
    btn1.addEventListener("click", () => {
        if (btn1.value == course1[count1].answer) {
            score++;
        }
        answer1[count1] = btn1.value;
        buttons1.forEach(items => {
            const btn1 = items;
            if (btn1.value == answer1[count1]) {
                btn1.style.backgroundColor = "gray";
            }
            else {
                btn1.style.backgroundColor = "white";
            }
        });
    });
});
// back 
const back = document.getElementById("back");
back.addEventListener("click", () => {
    window.location.href = ("../courseselection.html");
});
function scoreList() {
    const list = localStorage.getItem('userleaderboard');
    if (list) {
        return JSON.parse(list);
    }
    else {
        return [];
    }
}
function updatescorelist(newUser) {
    const list = scoreList();
    list.push(newUser);
    localStorage.setItem('userleaderboard', JSON.stringify(list));
}
const submit = document.getElementById("submit");
var today = new Date();
submit.addEventListener("click", () => {
    const data = localStorage.getItem("user");
    const data1 = JSON.parse(data);
    const usernam = localStorage.getItem('username');
    const username = JSON.parse(usernam);
    console.log(username);
    const userDetail = data1.find(u => u.name === username);
    const email = userDetail === null || userDetail === void 0 ? void 0 : userDetail.email;
    const userlist = {
        name: userDetail.name,
        email: userDetail.email,
        course: `${titlename3}`,
        score: score,
        date: today.toLocaleDateString(),
    };
    console.log(userlist);
    const list = scoreList();
    console.log(list);
    const update = list.find(e => e.course === userlist.course && e.email === userlist.email);
    console.log(update);
    if (update) {
        if (update.score < userlist.score) {
            update.score = userlist.score;
        }
        const updated = list.filter(u => u.email != userlist.email);
        updated.push(update);
        localStorage.setItem("userleaderboard", JSON.stringify(updated));
    }
    else {
        updatescorelist(userlist);
    }
    window.location.href = ("../userleaderboard/userleaderboard.html");
});
function getdata() {
    const data = localStorage.getItem('userleaderboard');
    return data ? JSON.parse(data) : [];
}
// timer countdown
let timeLeft = course1.length * 60;
const timerElement = document.getElementById("timer");
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}
function startCountdown() {
    const countdown = setInterval(() => {
        timerElement.textContent = formatTime(timeLeft);
        if (timeLeft <= 0) {
            clearInterval(countdown);
            timerElement.textContent = "Time's Up!";
            //timer submit
            const data = localStorage.getItem("user");
            const data1 = JSON.parse(data);
            const usernam = localStorage.getItem('username');
            const username = JSON.parse(usernam);
            console.log(username);
            const userDetail = data1.find(u => u.name === username);
            const email = userDetail === null || userDetail === void 0 ? void 0 : userDetail.email;
            const userlist = {
                name: userDetail.name,
                email: userDetail.email,
                course: `${titlename3}`,
                score: score,
                date: today.toLocaleDateString(),
            };
            console.log(userlist);
            const list = scoreList();
            console.log(list);
            const update = list.find(e => e.course === userlist.course && e.email === userlist.email);
            console.log(update);
            if (update) {
                if (update.score < userlist.score) {
                    update.score = userlist.score;
                }
                const updated = list.filter(u => u.email != userlist.email);
                updated.push(update);
                localStorage.setItem("userleaderboard", JSON.stringify(updated));
            }
            else {
                updatescorelist(userlist);
            }
            window.location.href = ("../userleaderboard/userleaderboard.html");
            return;
        }
        timeLeft--;
    }, 1000);
}
startCountdown();
