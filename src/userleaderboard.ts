window.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle: HTMLInputElement | null = document.getElementById('darkModeToggle') as HTMLInputElement;
  
    const enableDarkMode = () => {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled'); 
        if (darkModeToggle) darkModeToggle.checked = true;
        document.getElementById("topbar")!.style.backgroundColor="#222";
    };
  
    const disableDarkMode = () => {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled'); 
        if (darkModeToggle) darkModeToggle.checked = false;
        document.getElementById("topbar")!.style.backgroundColor="black";
    };
  
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'enabled') {
        enableDarkMode(); 
    }
  
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', () => {
            if (darkModeToggle.checked) {
                enableDarkMode(); 
            } else {
                disableDarkMode();
            }
        });
    }
  });

  

  // topbar

  document.getElementById("out")?.addEventListener("click",()=>
    {
        window.location.href=("../../../index.html");
    })

  const username11=document.getElementById("user") as HTMLDivElement;
  const logindata1=localStorage.getItem("username");
  const username12=JSON.parse(logindata1!);

  username11.textContent=`${username12}`;


//   mainbar

// const userdata=localStorage.getItem("userleaderboard");

const userdata1:courseattend[] = JSON.parse(localStorage.getItem('userleaderboard') || '[]');
console.log(userdata1);
const  coursename=localStorage.getItem("clickquiz");
const  coursename1=JSON.parse(coursename!);


let store:courseattend[]=[];


for(let i=0;i<userdata1.length;i++)
{
    if(userdata1[i].course==coursename1)
    {
        store.push(userdata1[i]);
    }
}
store.sort((a,b) => b.score-a.score);
const name1=localStorage.getItem("username");
const name2=JSON.parse(name1!);


var count2=0;
store.forEach(items=>{
    count2++;
    const tr=document.createElement("tr");
    const td1=document.createElement("td");
    const td2=document.createElement("td");
    const td3=document.createElement("td");
    const td4=document.createElement("td");
    const td5=document.createElement("td");
    if(items.name==name2)
    {
        tr.style.backgroundColor="lightGreen";
    }

    td1.textContent=`${count2}`;
    td2.textContent=items.name;
    td3.textContent=items.email;
    td4.textContent=items.course;
    td5.textContent=`${items.score}`;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    document.getElementById("table1")?.append(tr);


})

const back1=document.getElementById("back") as HTMLButtonElement;

back1.addEventListener("click",()=>{
    window.location.href=("../courseselection.html");
})


