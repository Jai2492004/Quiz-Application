//dark mode

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
    window.location.href=("../../index.html");
})

  //topbar user name

  const username=document.getElementById("user") as HTMLDivElement;
  const logindata=localStorage.getItem("username");
  const username1=JSON.parse(logindata!);

  username.textContent=` ${username1}`;


  //main course

  const courseTitle=localStorage.getItem("titleStorage");
  const courseTitle1:titledata[]=JSON.parse(courseTitle!);

  courseTitle1.forEach((items,index)=>{
  const maindiv=document.createElement("div");
  const mainbutton=document.createElement("button");
  const maintext=document.createElement("p");

  maindiv.id="div";
  mainbutton.id=`${items.title1}`;
  maintext.id="maintext";
  mainbutton.classList.add("mainbutton");
  mainbutton.id=`${items.title1}`

  mainbutton.textContent="Start quiz";
  maintext.textContent=`Course ${index+1}: ${items.title1}`;

  maindiv.appendChild(maintext);
  maindiv.appendChild(mainbutton);

  document.getElementById("showtitle")?.appendChild(maindiv);
  })
 
  //recently viewed

  const titleuser=localStorage.getItem(`${username1}`);
  const titleuser1:string[]=JSON.parse(titleuser!);
  const data=localStorage.getItem("titleStorage");
  const data1=JSON.parse(data!);
  
const data3:string[]=[];

  localStorage.setItem("usertitle",JSON.stringify(data3));
 if(titleuser1!==null)
 {
    for(let i=0;i<data1.length;i++)
        {
           
            for(let j=0;j<titleuser1.length;j++)
            {
                if(data1[i].title1==titleuser1[j])
                {
                    data3.push(titleuser1[j]);
                }
            }
        }
    
    data3.forEach(title=>{
        const maindiv=document.createElement("div");
        const mainbutton=document.createElement("button");
        const maintext=document.createElement("p");
        
        maindiv.id="div";
        mainbutton.id=`${title}`;
        maintext.id="maintext";
        mainbutton.classList.add("mainbutton");
        mainbutton.id=`${title}`
        
        mainbutton.textContent="Re-attempt quiz";
        maintext.textContent=`Course : ${title}`;
        
        maindiv.appendChild(maintext);
        maindiv.appendChild(mainbutton);
        
        document.getElementById("recentview")?.appendChild(maindiv);
        
    })
  
 }


  var titlearray:string[]=[];

  const buttonclick=document.querySelectorAll(".mainbutton");

  buttonclick.forEach(data=>{
    data.addEventListener("click",()=>{
        titlearray=get7();
        titlearray.push(data.id);
        localStorage.setItem("clickquiz",JSON.stringify(data.id));
        localStorage.setItem(`${username1}`,JSON.stringify(data.id));
        titlearray=titlearray.filter((value, index, self) => self.indexOf(value) === index);
        localStorage.setItem(`${username1}`,JSON.stringify(titlearray));


        document.getElementById("recentview")!.innerHTML="";
        for(let i=0;i<titlearray.length;i++)
            {
            const maindiv=document.createElement("div");
        const mainbutton=document.createElement("button");
        const maintext=document.createElement("p");
        
        maindiv.id="div";
        mainbutton.id=`${titlearray[i]}`;
        maintext.id="maintext";
        mainbutton.classList.add("mainbutton");
        mainbutton.id=`${titlearray[i]}`
        
        mainbutton.textContent="Re-attempt quiz";
        maintext.textContent=`Course: ${titlearray[i]}`;
        
        maindiv.appendChild(maintext);
        maindiv.appendChild(mainbutton);
        document.getElementById("recentview")?.appendChild(maindiv);
        
        window.location.href=("./quizpage/quizpage.html");
            }
    
        
  })
  })

function get7()
{
  const titlearray1=localStorage.getItem(`${username1}`);
    return titlearray1 ? JSON.parse(titlearray1) : [];
}



