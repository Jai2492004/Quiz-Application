"use strict";
window.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const enableDarkMode = () => {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
        if (darkModeToggle)
            darkModeToggle.checked = true;
        document.getElementById("topbar").style.backgroundColor = "#222";
    };
    const disableDarkMode = () => {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled');
        if (darkModeToggle)
            darkModeToggle.checked = false;
        document.getElementById("topbar").style.backgroundColor = "black";
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
const addQuestion = document.getElementById("add");
var titlestorage = [];
var datastorage = localStorage.getItem("titleStorage");
if (datastorage != null) {
    titlestorage = JSON.parse(datastorage);
}
const title = titlestorage[titlestorage.length - 1];
const titlename = title.title1;
const h2 = document.getElementById("titlebar");
if (h2 && h2.textContent !== null && h2.textContent !== null) {
    h2.textContent = `Title: ${titlename}`;
}
addQuestion.addEventListener("click", function () {
    var _a, _b, _c, _d, _e, _f;
    const question1 = document.getElementById("question");
    const option11 = document.getElementById("option1");
    const option21 = document.getElementById("option2");
    const option31 = document.getElementById("option3");
    const option41 = document.getElementById("option4");
    const answer1 = document.getElementById("answer");
    if ((question1 === null || question1 === void 0 ? void 0 : question1.value.trim()) === "" || (option11 === null || option11 === void 0 ? void 0 : option11.value.trim()) === "" || (option21 === null || option21 === void 0 ? void 0 : option21.value.trim()) === "" || (option31 === null || option31 === void 0 ? void 0 : option31.value.trim()) === "" || (option41 === null || option41 === void 0 ? void 0 : option41.value.trim()) === "" || (answer1 === null || answer1 === void 0 ? void 0 : answer1.value.trim()) === "") {
        alert("Enter all the options");
    }
    else {
        const addData = {
            question1: (_a = question1 === null || question1 === void 0 ? void 0 : question1.value.trim()) !== null && _a !== void 0 ? _a : "",
            option1: (_b = option11 === null || option11 === void 0 ? void 0 : option11.value.trim()) !== null && _b !== void 0 ? _b : "",
            option2: (_c = option21 === null || option21 === void 0 ? void 0 : option21.value.trim()) !== null && _c !== void 0 ? _c : "",
            option3: (_d = option31 === null || option31 === void 0 ? void 0 : option31.value.trim()) !== null && _d !== void 0 ? _d : "",
            option4: (_e = option41 === null || option41 === void 0 ? void 0 : option41.value.trim()) !== null && _e !== void 0 ? _e : "",
            answer: (_f = answer1 === null || answer1 === void 0 ? void 0 : answer1.value.trim()) !== null && _f !== void 0 ? _f : "",
        };
        const data2 = JSON.parse(localStorage.getItem(`${titlename}`) || '[]');
        data2.push(addData);
        localStorage.setItem(`${titlename}`, JSON.stringify(data2));
        question1.value = "";
        option11.value = "";
        option21.value = "";
        option31.value = "";
        option41.value = "";
        answer1.value = "";
    }
});
const save = document.getElementById("save");
save.addEventListener("click", function () {
    window.location.href = ("../create/create.html");
});
