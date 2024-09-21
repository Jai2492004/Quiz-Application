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



  document.getElementById("out")?.addEventListener("click",()=>
    {
        window.location.href=("../../../index.html");
    })


// main bar

document.getElementById("mainsub2")!.style.display="none";

//option
const titl=localStorage.getItem("titleStorage");
const titl1:titledata[]=JSON.parse(titl!);

titl1.forEach(items=>{
    const option=document.createElement("option");

    option.textContent=items.title1;

    document.getElementById("courses")?.appendChild(option);
})




const user1=localStorage.getItem("userleaderboard");

var user2:courseattend[]=JSON.parse(user1!);


const user3=localStorage.getItem("titleStorage");

const user4:titledata[]=JSON.parse(user3!);

let count3:number=0;
var courseArray:courseattend[]=[];
const datam:courseattend[]=user2;
var f=0;
call();
function call()
{
 
    if(f==0)
        {
user4.forEach(items=>{
   
   
    datam?.forEach(items1=>
    {
        if(items.title1==items1.course)
        {

            courseArray.push(items1); 
        }
    })
    f=1;

})

        }

const tr1=document.createElement("tr");
const th1=document.createElement("th");
const th2=document.createElement("th");
const th3=document.createElement("th");
const th4=document.createElement("th");
const th5=document.createElement("th");


th1.textContent="RANK";
th2.textContent="NAME";
th3.textContent="SCORE";
th4.textContent="COURSE";
th5.textContent="DATE";

tr1.appendChild(th1);
tr1.appendChild(th2);
tr1.appendChild(th3);
tr1.appendChild(th4);
tr1.appendChild(th5);



document.getElementById("table1")!.appendChild(tr1);




courseArray = courseArray.sort((a, b) => b.score - a.score);
user4.forEach(items=>{
    count3=0;
courseArray.forEach(items1=>{
  
    if(items.title1==items1.course)
    {
        count3++;
      const tr=document.createElement("tr");
            const td1=document.createElement("td");
            const td2=document.createElement("td");
            const td3=document.createElement("td");
            const td4=document.createElement("td");
            const td5=document.createElement("td");

            const button1=document.createElement("button");
            button1.id="button1";
            button1.classList.add("button1");
            button1.textContent="Edit"
            const button2=document.createElement("button");
            button2.id="button2";
            button2.classList.add("button2");
            button2.textContent="Delete";
        

        
            tr.id="tm";
            tr.classList.add("tm");
        
            td1.textContent=`${count3}`;
            td2.textContent=items1.name;
            td3.textContent=String(items1.score);
            td4.textContent=items1.course;
            td5.textContent=items1.date;
          
            td5.appendChild(button1);
            td5.appendChild(button2);
        
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            document.getElementById("table1")?.appendChild(tr); 
    }

})
})
}

// back button
document.getElementById("back")?.addEventListener("click",()=>{
    window.location.href=("../admin.html")
})


var count4=0;

const option=document.getElementById("courses") as HTMLOptionElement;

option.addEventListener("change",()=>{
    count4=0;
    const t = document.getElementById("table1");
    t!.innerHTML = "";
    if(option.value!="Select course")
    { 


        const tr1=document.createElement("tr");
        const th1=document.createElement("th");
        const th2=document.createElement("th");
        const th3=document.createElement("th");
        const th4=document.createElement("th");
        const th5=document.createElement("th");


        th1.textContent="RANK";
        th2.textContent="NAME";
        th3.textContent="SCORE";
        th4.textContent="COURSE";
        th5.textContent="DATE";

        tr1.appendChild(th1)
        tr1.appendChild(th2)
        tr1.appendChild(th3)
        tr1.appendChild(th4)
        tr1.appendChild(th5)

        document.getElementById("table1")!.appendChild(tr1);
       
    user2.forEach(items=>{
        if(items.course==option.value)
        {
            count4++;
            const tr=document.createElement("tr");
            const td1=document.createElement("td");
            const td2=document.createElement("td");
            const td3=document.createElement("td");
            const td4=document.createElement("td");
            const td5=document.createElement("td");

            const button1=document.createElement("button");
            button1.id="button1";
            button1.textContent="Edit"
            const button2=document.createElement("button");
            button2.id="button2";
            button2.textContent="Delete";
            tr.id="tm";
        
            td1.textContent=`${count4}`;
            td2.textContent=items.name;
            td3.textContent=String(items.score);
            td4.textContent=items.course;
            td5.textContent=items.date;
            // console.log(items.course);
          
            td5.appendChild(button1);
            td5.appendChild(button2);
        
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            document.getElementById("table1")?.appendChild(tr); 

        }
    })
}
else
{
    call();
}

})


function reomveable()
{
    const tm=document.querySelectorAll(".tm");
    tm.forEach(items=>{
        items.remove();
     })

}
const button23 = document.querySelectorAll(".button2");

button23.forEach(items=>{
    items.addEventListener("click",()=>{
    const deletecourse=items.parentElement?.previousElementSibling?.textContent;
    const deletename=items.parentElement?.previousElementSibling?.previousElementSibling?.previousElementSibling?.textContent;

    var data:courseattend[]=user2;

    data=data.filter(items1=>(items1.name!=deletename || items1.course!=deletecourse));
   
    localStorage.setItem("userleaderboard",JSON.stringify(data));
    window.location.reload();

})

    
})

// var deta;

const button13 = document.querySelectorAll(".button1");

button13.forEach(items=>{
    items.addEventListener("click",()=>{
    const deletecourse=items.parentElement?.previousElementSibling?.textContent;
    const deletename=items.parentElement?.previousElementSibling?.previousElementSibling?.previousElementSibling?.textContent;

    var data1:courseattend[]=user2;

   const  deta=data1.find(items1=>(items1.name==deletename && items1.course==deletecourse));
   

   const mainsub2=document.getElementById("mainsub2") as HTMLDivElement;

if(mainsub2)
{

  const name=document.getElementById("name") as HTMLInputElement;
  const score =document.getElementById("score") as HTMLInputElement;
  const course=document.getElementById("course") as HTMLInputElement;
  const date=document.getElementById("date") as HTMLInputElement;

  name.value=deta!.name;
  score.value=String(deta!.score);
  course.value=deta!.course;
  date.value=deta!.date;

  document.getElementById('save2')?.addEventListener("click",()=>
{


var data1:courseattend[]=user2;
const  deta1=data1.filter(items1=>(items1.name!=deletename || items1.course!=deletecourse));
    deta!.name=name.value;
    deta!.score=Number(score.value);
    deta!.course=course.value;
    deta!.date=date.value;
   
    deta1.push(deta!);
    
    localStorage.setItem("userleaderboard",JSON.stringify(deta1));
    window.location.reload();


})



document.getElementById("back2")?.addEventListener("click",()=>{
    window.location.reload();
})




}

    document.getElementById("mainsub1")!.style.display="none";
    document.getElementById("mainsub2")!.style.display="flex";

})

})  






