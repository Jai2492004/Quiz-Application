"use strict";
var _a;
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
(_a = document.getElementById("out")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    window.location.href = ("../../index.html");
});
const editpage = document.getElementById("edit");
editpage.addEventListener("click", function () {
    window.location.href = ("../../dest/admin/create/create.html");
});
const leaderpage = document.getElementById("leader");
leaderpage.addEventListener("click", () => {
    window.location.href = ("./adminleaderboard/adminleaderboard.html");
});
