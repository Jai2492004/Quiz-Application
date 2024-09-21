"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
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
//work container
const edittitle = localStorage.getItem("editButton");
const edittitle1 = JSON.parse(edittitle);
const edititem = localStorage.getItem(edittitle1);
var count = 0;
var edititem1 = JSON.parse(edititem);
const heading = document.createElement("h2");
const para1 = document.createElement("p");
const para2 = document.createElement("p");
const para3 = document.createElement("p");
const para4 = document.createElement("p");
const para5 = document.createElement("p");
const para6 = document.createElement("p");
heading.id = "heading";
heading.textContent = `Title: ${edittitle1}`;
heading.style.marginBottom = "10px";
para1.textContent = "Question:" + " " + (count + 1);
para2.textContent = "Option1:";
para3.textContent = "Option2:";
para4.textContent = "Option3:";
para5.textContent = "Option4:";
para6.textContent = "Answer:";
const input1 = document.createElement("input");
const input2 = document.createElement("input");
const input3 = document.createElement("input");
const input4 = document.createElement("input");
const input5 = document.createElement("input");
const input6 = document.createElement("input");
if (edititem1 != null) {
    const add = document.createElement("button");
    add.id = "add";
    add.textContent = "Add+";
    heading.appendChild(add);
    input1.value = (_a = edititem1[count]) === null || _a === void 0 ? void 0 : _a.question1;
    input2.value = (_b = edititem1[count]) === null || _b === void 0 ? void 0 : _b.option1;
    input3.value = (_c = edititem1[count]) === null || _c === void 0 ? void 0 : _c.option2;
    input4.value = (_d = edititem1[count]) === null || _d === void 0 ? void 0 : _d.option3;
    input5.value = (_e = edititem1[count]) === null || _e === void 0 ? void 0 : _e.option4;
    input6.value = (_f = edititem1[count]) === null || _f === void 0 ? void 0 : _f.answer;
    (_g = document.getElementById("showdata")) === null || _g === void 0 ? void 0 : _g.appendChild(heading);
    (_h = document.getElementById("showdata")) === null || _h === void 0 ? void 0 : _h.appendChild(para1);
    (_j = document.getElementById("showdata")) === null || _j === void 0 ? void 0 : _j.appendChild(input1);
    (_k = document.getElementById("showdata")) === null || _k === void 0 ? void 0 : _k.appendChild(para2);
    (_l = document.getElementById("showdata")) === null || _l === void 0 ? void 0 : _l.appendChild(input2);
    (_m = document.getElementById("showdata")) === null || _m === void 0 ? void 0 : _m.appendChild(para3);
    (_o = document.getElementById("showdata")) === null || _o === void 0 ? void 0 : _o.appendChild(input3);
    (_p = document.getElementById("showdata")) === null || _p === void 0 ? void 0 : _p.appendChild(para4);
    (_q = document.getElementById("showdata")) === null || _q === void 0 ? void 0 : _q.appendChild(input4);
    (_r = document.getElementById("showdata")) === null || _r === void 0 ? void 0 : _r.appendChild(para5);
    (_s = document.getElementById("showdata")) === null || _s === void 0 ? void 0 : _s.appendChild(input5);
    (_t = document.getElementById("showdata")) === null || _t === void 0 ? void 0 : _t.appendChild(para6);
    (_u = document.getElementById("showdata")) === null || _u === void 0 ? void 0 : _u.appendChild(input6);
    //next content
    const next = document.getElementById("next");
    next.addEventListener("click", function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        para1.textContent = "";
        document.getElementById("showdata").innerHTML = "";
        if (count < edititem1.length - 1) {
            count++;
        }
        para1.textContent = "Question:" + " " + (count + 1);
        input1.value = (_a = edititem1[count]) === null || _a === void 0 ? void 0 : _a.question1;
        input2.value = (_b = edititem1[count]) === null || _b === void 0 ? void 0 : _b.option1;
        input3.value = (_c = edititem1[count]) === null || _c === void 0 ? void 0 : _c.option2;
        input4.value = (_d = edititem1[count]) === null || _d === void 0 ? void 0 : _d.option3;
        input5.value = (_e = edititem1[count]) === null || _e === void 0 ? void 0 : _e.option4;
        input6.value = (_f = edititem1[count]) === null || _f === void 0 ? void 0 : _f.answer;
        (_g = document.getElementById("showdata")) === null || _g === void 0 ? void 0 : _g.appendChild(heading);
        (_h = document.getElementById("showdata")) === null || _h === void 0 ? void 0 : _h.appendChild(para1);
        (_j = document.getElementById("showdata")) === null || _j === void 0 ? void 0 : _j.appendChild(input1);
        (_k = document.getElementById("showdata")) === null || _k === void 0 ? void 0 : _k.appendChild(para2);
        (_l = document.getElementById("showdata")) === null || _l === void 0 ? void 0 : _l.appendChild(input2);
        (_m = document.getElementById("showdata")) === null || _m === void 0 ? void 0 : _m.appendChild(para3);
        (_o = document.getElementById("showdata")) === null || _o === void 0 ? void 0 : _o.appendChild(input3);
        (_p = document.getElementById("showdata")) === null || _p === void 0 ? void 0 : _p.appendChild(para4);
        (_q = document.getElementById("showdata")) === null || _q === void 0 ? void 0 : _q.appendChild(input4);
        (_r = document.getElementById("showdata")) === null || _r === void 0 ? void 0 : _r.appendChild(para5);
        (_s = document.getElementById("showdata")) === null || _s === void 0 ? void 0 : _s.appendChild(input5);
        (_t = document.getElementById("showdata")) === null || _t === void 0 ? void 0 : _t.appendChild(para6);
        (_u = document.getElementById("showdata")) === null || _u === void 0 ? void 0 : _u.appendChild(input6);
    });
    //prev content
    const prev = document.getElementById("prev");
    prev.addEventListener("click", function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        para1.textContent = "";
        document.getElementById("showdata").innerHTML = "";
        if (count > 0) {
            count--;
        }
        para1.textContent = "Question:" + " " + (count + 1);
        input1.value = (_a = edititem1[count]) === null || _a === void 0 ? void 0 : _a.question1;
        input2.value = (_b = edititem1[count]) === null || _b === void 0 ? void 0 : _b.option1;
        input3.value = (_c = edititem1[count]) === null || _c === void 0 ? void 0 : _c.option2;
        input4.value = (_d = edititem1[count]) === null || _d === void 0 ? void 0 : _d.option3;
        input5.value = (_e = edititem1[count]) === null || _e === void 0 ? void 0 : _e.option4;
        input6.value = (_f = edititem1[count]) === null || _f === void 0 ? void 0 : _f.answer;
        (_g = document.getElementById("showdata")) === null || _g === void 0 ? void 0 : _g.appendChild(heading);
        (_h = document.getElementById("showdata")) === null || _h === void 0 ? void 0 : _h.appendChild(para1);
        (_j = document.getElementById("showdata")) === null || _j === void 0 ? void 0 : _j.appendChild(input1);
        (_k = document.getElementById("showdata")) === null || _k === void 0 ? void 0 : _k.appendChild(para2);
        (_l = document.getElementById("showdata")) === null || _l === void 0 ? void 0 : _l.appendChild(input2);
        (_m = document.getElementById("showdata")) === null || _m === void 0 ? void 0 : _m.appendChild(para3);
        (_o = document.getElementById("showdata")) === null || _o === void 0 ? void 0 : _o.appendChild(input3);
        (_p = document.getElementById("showdata")) === null || _p === void 0 ? void 0 : _p.appendChild(para4);
        (_q = document.getElementById("showdata")) === null || _q === void 0 ? void 0 : _q.appendChild(input4);
        (_r = document.getElementById("showdata")) === null || _r === void 0 ? void 0 : _r.appendChild(para5);
        (_s = document.getElementById("showdata")) === null || _s === void 0 ? void 0 : _s.appendChild(input5);
        (_t = document.getElementById("showdata")) === null || _t === void 0 ? void 0 : _t.appendChild(para6);
        (_u = document.getElementById("showdata")) === null || _u === void 0 ? void 0 : _u.appendChild(input6);
    });
    //save content
    const save1 = document.getElementById("save");
    save1.addEventListener("click", function () {
        if (input1.value == "" || input2.value == "" || input3.value == "" || input4.value == "" || input5.value == "" || input6.value == "") {
            alert("Enter The Input");
        }
        else {
            edititem1[count].question1 = input1.value;
            edititem1[count].option1 = input2.value;
            edititem1[count].option2 = input3.value;
            edititem1[count].option3 = input4.value;
            edititem1[count].option4 = input5.value;
            edititem1[count].answer = input6.value;
            localStorage.setItem(edittitle1, JSON.stringify(edititem1));
            alert("Saved successfully");
        }
    });
    // delete Content
    const delete1 = document.getElementById("delete");
    delete1.addEventListener("click", function () {
        edititem1 = edititem1.filter(item => item !== edititem1[count]);
        localStorage.setItem(edittitle1, JSON.stringify(edititem1));
        if (edititem1.length == 0) {
            alert("Course Deleted Successfully");
            const deletetitle = localStorage.getItem("titleStorage");
            var deletetitle1 = JSON.parse(deletetitle);
            deletetitle1 = deletetitle1.filter(item => item.title1 != edittitle1);
            localStorage.setItem('titleStorage', JSON.stringify(deletetitle1));
            localStorage.removeItem(`${edittitle1}`);
            document.getElementById("change-button").style.display = "none";
            return window.location.href = (".././create/create.html");
        }
        window.location.reload();
    });
}
// done button
const done = document.getElementById("done");
done.addEventListener('click', () => {
    window.location.href = ("../create/create.html");
});
// add button
document.getElementById("add").addEventListener("click", () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    input1.value = "";
    input2.value = "";
    input3.value = "";
    input4.value = "";
    input5.value = "";
    input6.value = "";
    const h2 = document.createElement("h2");
    h2.textContent = "Add question";
    h2.id = "addhead";
    const save1 = document.createElement("button");
    save1.id = "save1";
    save1.textContent = "Save";
    h2.appendChild(save1);
    document.getElementById("sub-main").style.display = "none";
    (_a = document.getElementById("addquestion")) === null || _a === void 0 ? void 0 : _a.appendChild(h2);
    (_b = document.getElementById("addquestion")) === null || _b === void 0 ? void 0 : _b.appendChild(para1);
    (_c = document.getElementById("addquestion")) === null || _c === void 0 ? void 0 : _c.appendChild(input1);
    (_d = document.getElementById("addquestion")) === null || _d === void 0 ? void 0 : _d.appendChild(para2);
    (_e = document.getElementById("addquestion")) === null || _e === void 0 ? void 0 : _e.appendChild(input2);
    (_f = document.getElementById("addquestion")) === null || _f === void 0 ? void 0 : _f.appendChild(para3);
    (_g = document.getElementById("addquestion")) === null || _g === void 0 ? void 0 : _g.appendChild(input3);
    (_h = document.getElementById("addquestion")) === null || _h === void 0 ? void 0 : _h.appendChild(para4);
    (_j = document.getElementById("addquestion")) === null || _j === void 0 ? void 0 : _j.appendChild(input4);
    (_k = document.getElementById("addquestion")) === null || _k === void 0 ? void 0 : _k.appendChild(para5);
    (_l = document.getElementById("addquestion")) === null || _l === void 0 ? void 0 : _l.appendChild(input5);
    (_m = document.getElementById("addquestion")) === null || _m === void 0 ? void 0 : _m.appendChild(para6);
    (_o = document.getElementById("addquestion")) === null || _o === void 0 ? void 0 : _o.appendChild(input6);
    const save3 = document.getElementById("save1");
    save3 === null || save3 === void 0 ? void 0 : save3.addEventListener("click", () => {
        var _a, _b, _c, _d, _e, _f;
        if ((input1 === null || input1 === void 0 ? void 0 : input1.value.trim()) === "" || (input2 === null || input2 === void 0 ? void 0 : input2.value.trim()) === "" || (input3 === null || input3 === void 0 ? void 0 : input3.value.trim()) === "" || (input4 === null || input4 === void 0 ? void 0 : input4.value.trim()) === "" || (input5 === null || input5 === void 0 ? void 0 : input5.value.trim()) === "" || (input6 === null || input6 === void 0 ? void 0 : input6.value.trim()) === "") {
            alert("Enter all the options");
        }
        else {
            const addData = {
                question1: (_a = input1 === null || input1 === void 0 ? void 0 : input1.value.trim()) !== null && _a !== void 0 ? _a : "",
                option1: (_b = input2 === null || input2 === void 0 ? void 0 : input2.value.trim()) !== null && _b !== void 0 ? _b : "",
                option2: (_c = input3 === null || input3 === void 0 ? void 0 : input3.value.trim()) !== null && _c !== void 0 ? _c : "",
                option3: (_d = input4 === null || input4 === void 0 ? void 0 : input4.value.trim()) !== null && _d !== void 0 ? _d : "",
                option4: (_e = input5 === null || input5 === void 0 ? void 0 : input5.value.trim()) !== null && _e !== void 0 ? _e : "",
                answer: (_f = input6 === null || input6 === void 0 ? void 0 : input6.value.trim()) !== null && _f !== void 0 ? _f : "",
            };
            const data2 = JSON.parse(localStorage.getItem(`${edittitle1}`) || '[]');
            data2.push(addData);
            localStorage.setItem(`${edittitle1}`, JSON.stringify(data2));
            input1.value = "";
            input2.value = "";
            input3.value = "";
            input4.value = "";
            input5.value = "";
            input6.value = "";
            window.location.reload();
        }
    });
});
