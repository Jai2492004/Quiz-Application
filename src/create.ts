// selection quiz operation

const selectElement = document.getElementById('option') as HTMLSelectElement;
const container1 = document.getElementById('container1') as HTMLDivElement;
const container2 = document.getElementById('container2') as HTMLDivElement;

document.getElementById("quiz-title")!.style.display="none";
const showContainer = (selectedValue: string) => {

  container1.classList.add('hidden');
  container2.classList.add('hidden');

  if (selectedValue === 'container1') {
    container1.classList.remove('hidden');
    document.getElementById("container1-sub")!.style.display="flex";
    document.getElementById("showdata")!.style.display="flex";
    document.getElementById("quiz-title")!.style.display="none";

    
  } else if (selectedValue === 'container2') {
    container2.classList.remove('hidden');
  document.getElementById("container1-sub")!.style.display="none";
  document.getElementById("showdata")!.style.display="none";
  document.getElementById("quiz-title")!.style.display="flex";
  }
};

document.getElementById("back")?.addEventListener("click",()=>{
  window.location.href=("../admin.html");
})

selectElement.addEventListener('change', () => {
  const selectedValue = selectElement.value;
  showContainer(selectedValue);
});
 


// top bar switch


window.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle: HTMLInputElement | null = document.getElementById('darkModeToggle') as HTMLInputElement;

  const enableDarkMode = () => {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled'); 
      if (darkModeToggle) darkModeToggle.checked = true;
      document.getElementById("topbar")!.style.backgroundColor="#222";
      document.getElementById("option")!.style.backgroundColor="#222";
     call();
     calledit();
     calldelete();

  };

  function call()
  {
    const elements=document.querySelectorAll(".titlediv");
    elements.forEach((element) => {
  (element as HTMLElement).style.backgroundColor = "lightGreen";
});
  }
function calledit()
{
  const elements=document.querySelectorAll(".editbutton");
  elements.forEach((element) => {
(element as HTMLElement).style.backgroundColor = "black";
(element as HTMLElement).style.color = "white";
});
}



function calldelete()
{
  const elements=document.querySelectorAll(".deletebutton");
  elements.forEach((element) => {
(element as HTMLElement).style.backgroundColor = "black";
(element as HTMLElement).style.color = "white";
});
}




  
  const disableDarkMode = () => {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled'); 
      if (darkModeToggle) darkModeToggle.checked = false;
      document.getElementById("topbar")!.style.backgroundColor="black";
      document.getElementById("option")!.style.backgroundColor="black";
      call1();
      calledit1();
      calldelete1();
  };

  function call1()
  {
    const elements=document.querySelectorAll(".titlediv");
    elements.forEach((element) => {
  (element as HTMLElement).style.backgroundColor = "orange";
});
  }

  function calledit1()
{
  const elements=document.querySelectorAll(".editbutton");
  elements.forEach((element) => {
(element as HTMLElement).style.backgroundColor = "white";
(element as HTMLElement).style.color = "black";
});

}


function calldelete1()
{
  const elements=document.querySelectorAll(".deletebutton");
  elements.forEach((element) => {
(element as HTMLElement).style.backgroundColor = "white";
(element as HTMLElement).style.color = "black";
});
}



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

//logout

document.getElementById("out")?.addEventListener("click",()=>
  {
      window.location.href=("../../../index.html");
  })

//empty container 1
const Title1=localStorage.getItem("titlestorage");
const Showdata=document.getElementById("showdata") as HTMLDivElement;
const Title2:titledata[]=JSON.parse(Title1!);
 if(Title2?.length==0)
{
  console.log("1");
  Showdata.textContent="CREATE NEW COURSE";
}
else
{
  Showdata.textContent="";
}





//create quiz

interface titledata{
    title1:string;
    discription1:string;
}



const local = localStorage.getItem('titleStorage');
var local1:titledata[]=local?JSON.parse(local) : [];
var f=0;



document.getElementById("create")!.addEventListener("click",function()
{
const title = document.getElementById("course-title") as HTMLInputElement;
const discription = document.getElementById("course-description") as HTMLTextAreaElement;

for(let i=0;i<local1.length;i++)
{
  if(local1[i].title1.trim()==title.value.trim())
  {
    alert("Title Already Exist and Add Question");
    f=1;
    break;
  }
}



if(title)
{
  

  if(title.value=="")
  {
    alert("Enter the valid title");
  }
  else
  {
    const titlelist: titledata=
        {
            title1:title.value.trim(),
            discription1:discription.value.trim(),
        }

        if(f==0)
        {
        const titledatalist = get1();
        titledatalist.push(titlelist);
        localStorage.setItem('titleStorage', JSON.stringify(titledatalist));
        alert("title created successfully");
        }
        window.location.href=("../../admin/question-adding/question.html");
      }
}
else
{
    alert("Enter Title");
}
title.value="";
discription.value="";
});

function get1() : titledata [] {

    const title = localStorage.getItem('titleStorage');
    return title ? JSON.parse(title) : [];

}



//container1 page 
if(container1)
{
const titledata1= get2();

titledata1.forEach((title5: titledata, index: number) => {

  const titleDiv: HTMLDivElement = document.createElement('div');
  const titlesubdiv: HTMLDivElement = document.createElement('div');
  const editbutton: HTMLButtonElement =document.createElement('button');
  const deletebutton: HTMLButtonElement =document.createElement('button');

  titleDiv.id="titlediv";
  titlesubdiv.id="titlesubdiv";
  editbutton.id=`${title5.title1}`;
  deletebutton.id=`${title5.title1}`;
  
  titleDiv.className="titlediv";
  editbutton.className="editbutton";
  deletebutton.className="deletebutton";


  editbutton.textContent="Edit";
  deletebutton.textContent="Delete";


  titlesubdiv.appendChild(editbutton);
  titlesubdiv.appendChild(deletebutton);

  titleDiv.textContent = `Title ${index + 1}: ${title5.title1} `;
  titleDiv.style.border = '1px solid black';
  titleDiv.style.margin = '5px';
  titleDiv.style.padding = '10px';
  titleDiv.style.width= "100%";
  titleDiv.style.backgroundColor = "orange";
  titleDiv.style.color = "black";
  titleDiv.style.fontWeight="bolder";
  titleDiv.appendChild(titlesubdiv);
  document.getElementById("showdata")!.appendChild(titleDiv);
})

function get2() : titledata[]{

  const title1 = localStorage.getItem('titleStorage');
  return title1 ? JSON.parse(title1) : [];
} 


//edit button

const buttons=document.querySelectorAll(".editbutton");

buttons.forEach((button)=>{
button.addEventListener('click',()=>{
  localStorage.setItem("editButton",JSON.stringify(button.id));
  window.location.href=("../editquiz/editquiz.html");
})
})


// delete button




const buttons1=document.querySelectorAll(".deletebutton");

buttons1.forEach((button)=>{
  button.addEventListener('click',()=>{
    const id=button.id;
    localStorage.removeItem(`${id}`);
    const deletetitle=localStorage.getItem("titleStorage");
    var deletetitle1:titledata[]=JSON.parse(deletetitle!);
    deletetitle1=deletetitle1.filter(items=>items.title1!=id);
    localStorage.setItem("titleStorage",JSON.stringify(deletetitle1));
    window.location.reload();
  })
})

}