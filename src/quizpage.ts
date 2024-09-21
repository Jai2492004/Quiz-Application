//dark mode

window.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle: HTMLInputElement | null = document.getElementById('darkModeToggle') as HTMLInputElement;
  
    const enableDarkMode = () => {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled'); 
        if (darkModeToggle) darkModeToggle.checked = true;
        document.getElementById("topbar")!.style.backgroundColor="#222";
        document.getElementById("next")!.style.backgroundColor="#222";
  
    };
  
     
    const disableDarkMode = () => {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled'); 
        if (darkModeToggle) darkModeToggle.checked = false;
        document.getElementById("topbar")!.style.backgroundColor="black";
        document.getElementById("next")!.style.backgroundColor="#222";
        document.getElementById("next")!.style.color="white";
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


  document.getElementById("out")?.addEventListener("click",()=>
{
    window.location.href=("../../../index.html");
})

  //topbar user name

  const user=document.getElementById("user") as HTMLDivElement;
  const username2=localStorage.getItem("username");
  const username3=JSON.parse(username2!);

  user.textContent=`${username3}`;


  const titlename2=localStorage.getItem("clickquiz");
  const titlename3=JSON.parse(titlename2!);



//   question page

const course=localStorage.getItem(`${titlename3}`);

const course1:add1[]=JSON.parse(course!);

// console.log(course1);
const head1=document.getElementById("heading") as HTMLHeadElement;
const question1=document.getElementById("question") as HTMLParagraphElement;
const button1=document.getElementById("option1") as HTMLButtonElement;
const button2=document.getElementById("option2") as HTMLButtonElement;
const button3=document.getElementById("option3") as HTMLButtonElement;
const button4=document.getElementById("option4") as HTMLButtonElement;


button1.classList.add("buttons");
button2.classList.add("buttons");
button3.classList.add("buttons");
button4.classList.add("buttons");





let count1=0;
head1.textContent="Quiz : "+titlename3;
question1.textContent=(count1+1)+". "+course1[count1]?.question1;
button1!.textContent="A. "+course1[count1]?.option1;
button2!.textContent="B. "+course1[count1]?.option2;
button3!.textContent="C. "+course1[count1]?.option3;
button4!.textContent="D. "+course1[count1]?.option4;

button1!.value=course1[count1]?.option1;
button2!.value=course1[count1]?.option2;
button3!.value=course1[count1]?.option3;
button4!.value=course1[count1]?.option4;



document.getElementById("back")!.style.display="none";
const next=document.getElementById("next") as HTMLButtonElement;
const buttons1 = document.querySelectorAll(".buttons");

document.getElementById("submit")!.style.display="none";

next.addEventListener("click",()=>{
    if(count1<course1.length-1)
    {
        count1++;
        document.getElementById("next")!.style.display="block";
        document.getElementById("submit")!.style.display="none";
    }
    if(count1==course1.length-1)
    {
        document.getElementById("next")!.style.display="none";
        document.getElementById("submit")!.style.display="block";

    }
    
   


   
 
   
    question1.textContent=(count1+1)+". "+course1[count1]?.question1;
button1!.textContent="A. "+course1[count1]?.option1;
button2!.textContent="B. "+course1[count1]?.option2;
button3!.textContent="C. "+course1[count1]?.option3;
button4!.textContent="D. "+course1[count1]?.option4;

button1!.value=course1[count1]?.option1;
button2!.value=course1[count1]?.option2;
button3!.value=course1[count1]?.option3;
button4!.value=course1[count1]?.option4;

if(answer1[count1]==undefined)
    {
        buttons1.forEach(items=>{
            const btn1=items as HTMLButtonElement;
            btn1.style.backgroundColor="white";
        })
    }
    else{

        buttons1.forEach(items=>{
            const btn1=items as HTMLButtonElement;
            if(btn1.value==answer1[count1])
            {
            btn1.style.backgroundColor="gray";
            // btn1.style.hover
         
           
            }
            else
            {
                btn1.style.backgroundColor="white";
            }


        })
       
    }

})

//prev button
const prev=document.getElementById("prev") as HTMLButtonElement;

prev.addEventListener("click",()=>{
    if(count1>0){
        count1--;
        document.getElementById("next")!.style.display="block";
        document.getElementById("submit")!.style.display="none";
    }
    question1.textContent=(count1+1)+". "+course1[count1]?.question1;
    button1!.textContent="A. "+course1[count1]?.option1;
    button2!.textContent="B. "+course1[count1]?.option2;
    button3!.textContent="C. "+course1[count1]?.option3;
    button4!.textContent="D. "+course1[count1]?.option4;
    
    button1!.value=course1[count1]?.option1;
    button2!.value=course1[count1]?.option2;
    button3!.value=course1[count1]?.option3;
    button4!.value=course1[count1]?.option4;


    if(answer1[count1]==undefined)
        {
            buttons1.forEach(items=>{
                const btn1=items as HTMLButtonElement;
                btn1.style.backgroundColor="white";
            })
        }
        else{
    
            buttons1.forEach(items=>{
                const btn1=items as HTMLButtonElement;
                if(btn1.value==answer1[count1])
                {
                btn1.style.backgroundColor="gray";
                }
                else
                {
                    
                    btn1.style.backgroundColor="white";
                }
            })
        }
})

var score=0;

let answer1:string[]=[];

buttons1.forEach(btn => {
    const btn1=btn as HTMLButtonElement
    btn1.addEventListener("click", () => {

        if(btn1.value==course1[count1].answer)
        {
            score++;
        }
        answer1[count1]=btn1.value;
        buttons1.forEach(items=>{
            const btn1=items as HTMLButtonElement;
            if(btn1.value==answer1[count1])
            {
            btn1.style.backgroundColor="gray";
            }
            else
            {
                btn1.style.backgroundColor="white";
            }
        })

    });
});




// back 

const back=document.getElementById("back") as HTMLButtonElement;

back.addEventListener("click",()=>{
    window.location.href=("../courseselection.html");
})


// submit button

interface courseattend{
    name:string,
    email:string,
    course:string,
    score:number,
    date:string,
}

function scoreList() : courseattend[]{
    const list = localStorage.getItem('userleaderboard');
    if(list){
        return JSON.parse(list);
    } else {
        return [];
    }
}

function updatescorelist(newUser : courseattend){
    const list = scoreList();
    list.push(newUser);
    localStorage.setItem('userleaderboard', JSON.stringify(list));
}

const submit=document.getElementById("submit") as HTMLButtonElement;
var today=new Date();

submit.addEventListener("click",()=>
{
    const data=localStorage.getItem("user");
    const data1:userdata[]=JSON.parse(data!);
    const usernam = localStorage.getItem('username')!;
    const username = JSON.parse(usernam);
    console.log(username);
    const userDetail = data1.find(u => u.name === username)!;
   
    const email = userDetail?.email;
    const userlist: courseattend = {
                    name: userDetail.name,
                    email: userDetail.email,
                    course: `${titlename3}`,
                    score: score,
                    date:today.toLocaleDateString(),

                };
                console.log(userlist)
    const list : courseattend[] = scoreList();
    console.log(list);
    const update : courseattend | undefined= list.find(e=> e.course === userlist.course && e.email === userlist.email);
    console.log(update);
        if(update){
            if(update.score < userlist.score){
                update.score = userlist.score;
            }
            const updated = list.filter(u => u.email != userlist.email);
            updated.push(update);

            localStorage.setItem("userleaderboard",JSON.stringify(updated));
        } 
        else {
            updatescorelist(userlist);  
        }
        
        
    window.location.href=("../userleaderboard/userleaderboard.html");

})



function getdata():courseattend[]
{
    const data= localStorage.getItem('userleaderboard');
    return data ? JSON.parse(data) : [];
}


// timer countdown


let timeLeft: number = course1.length * 60; 


const timerElement = document.getElementById("timer") as HTMLElement;


function formatTime(seconds: number): string {
    const minutes: number = Math.floor(seconds / 60);
    const remainingSeconds: number = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}


function startCountdown(): void {
    const countdown = setInterval(() => {
        
        timerElement.textContent = formatTime(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(countdown);
            timerElement.textContent = "Time's Up!";


//timer submit

const data=localStorage.getItem("user");
const data1:userdata[]=JSON.parse(data!);
const usernam = localStorage.getItem('username')!;
const username = JSON.parse(usernam);
console.log(username);
const userDetail = data1.find(u => u.name === username)!;

const email = userDetail?.email;
const userlist: courseattend = {
                name: userDetail.name,
                email: userDetail.email,
                course: `${titlename3}`,
                score: score,
                date:today.toLocaleDateString(),
            };
            console.log(userlist)
const list : courseattend[] = scoreList();
console.log(list);
const update : courseattend | undefined= list.find(e=> e.course === userlist.course && e.email === userlist.email);
console.log(update);
    if(update){
        if(update.score < userlist.score){
            update.score = userlist.score;
        }
        const updated = list.filter(u => u.email != userlist.email);
        updated.push(update);

        localStorage.setItem("userleaderboard",JSON.stringify(updated));
    } 
    else {
        updatescorelist(userlist);  
    }
    
    
window.location.href=("../userleaderboard/userleaderboard.html");
            return;
        }
        timeLeft--;
    }, 1000); 
}
startCountdown();
