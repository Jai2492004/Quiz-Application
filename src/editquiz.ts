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
})




//work container

const edittitle= localStorage.getItem("editButton");

const edittitle1=JSON.parse(edittitle!);

const edititem=localStorage.getItem(edittitle1);

var count=0;

var edititem1:add1[]=JSON.parse(edititem!);



   const heading=document.createElement("h2");
   const para1=document.createElement("p");
   const para2=document.createElement("p");
   const para3=document.createElement("p");
   const para4=document.createElement("p");
   const para5=document.createElement("p");
   const para6=document.createElement("p");

   heading.id="heading";

   heading.textContent=`Title: ${edittitle1}`;
   heading.style.marginBottom="10px";

   para1.textContent="Question:"+" "+(count+1);
   para2.textContent="Option1:";  
   para3.textContent="Option2:";
   para4.textContent="Option3:";
   para5.textContent="Option4:";
   para6.textContent="Answer:";


   const input1=document.createElement("input");
   const input2=document.createElement("input");
   const input3=document.createElement("input");
   const input4=document.createElement("input");
   const input5=document.createElement("input");
   const input6=document.createElement("input");

if(edititem1!=null)
{

  const add=document.createElement("button");

   add.id="add";

   add.textContent="Add+";

   heading.appendChild(add);


     input1.value=edititem1[count]?.question1;
   input2.value=edititem1[count]?.option1;
   input3.value=edititem1[count]?.option2;
   input4.value=edititem1[count]?.option3;
   input5.value=edititem1[count]?.option4;
   input6.value=edititem1[count]?.answer;

   document.getElementById("showdata")?.appendChild(heading);
   document.getElementById("showdata")?.appendChild(para1);
   document.getElementById("showdata")?.appendChild(input1);
   document.getElementById("showdata")?.appendChild(para2);
   document.getElementById("showdata")?.appendChild(input2);
   document.getElementById("showdata")?.appendChild(para3);
   document.getElementById("showdata")?.appendChild(input3);
   document.getElementById("showdata")?.appendChild(para4);
   document.getElementById("showdata")?.appendChild(input4);
   document.getElementById("showdata")?.appendChild(para5);
   document.getElementById("showdata")?.appendChild(input5);
   document.getElementById("showdata")?.appendChild(para6);
   document.getElementById("showdata")?.appendChild(input6);



   //next content


   const next=document.getElementById("next") as HTMLInputElement;
   next.addEventListener("click",function()
  {
    para1.textContent="";
    document.getElementById("showdata")!.innerHTML="";
    if(count<edititem1.length-1)
      {
      count++;
      }
      para1.textContent="Question:"+" "+(count+1);
   input1.value=edititem1[count]?.question1;
   input2.value=edititem1[count]?.option1;
   input3.value=edititem1[count]?.option2;
   input4.value=edititem1[count]?.option3;
   input5.value=edititem1[count]?.option4;
   input6.value=edititem1[count]?.answer;

   document.getElementById("showdata")?.appendChild(heading);
   document.getElementById("showdata")?.appendChild(para1);
   document.getElementById("showdata")?.appendChild(input1);
   document.getElementById("showdata")?.appendChild(para2);
   document.getElementById("showdata")?.appendChild(input2);
   document.getElementById("showdata")?.appendChild(para3);
   document.getElementById("showdata")?.appendChild(input3);
   document.getElementById("showdata")?.appendChild(para4);
   document.getElementById("showdata")?.appendChild(input4);
   document.getElementById("showdata")?.appendChild(para5);
   document.getElementById("showdata")?.appendChild(input5);
   document.getElementById("showdata")?.appendChild(para6);
   document.getElementById("showdata")?.appendChild(input6);
  })



  //prev content

  const prev=document.getElementById("prev") as HTMLInputElement;
   prev.addEventListener("click",function()
  {
    para1.textContent="";
    document.getElementById("showdata")!.innerHTML="";
    if(count>0)
    {
    count--;
    }

    para1.textContent="Question:"+" "+(count+1);
   input1.value=edititem1[count]?.question1;
   input2.value=edititem1[count]?.option1;
   input3.value=edititem1[count]?.option2;
   input4.value=edititem1[count]?.option3;
   input5.value=edititem1[count]?.option4;
   input6.value=edititem1[count]?.answer;

   

   document.getElementById("showdata")?.appendChild(heading);
   document.getElementById("showdata")?.appendChild(para1);
   document.getElementById("showdata")?.appendChild(input1);
   document.getElementById("showdata")?.appendChild(para2);
   document.getElementById("showdata")?.appendChild(input2);
   document.getElementById("showdata")?.appendChild(para3);
   document.getElementById("showdata")?.appendChild(input3);
   document.getElementById("showdata")?.appendChild(para4);
   document.getElementById("showdata")?.appendChild(input4);
   document.getElementById("showdata")?.appendChild(para5);
   document.getElementById("showdata")?.appendChild(input5);
   document.getElementById("showdata")?.appendChild(para6);
   document.getElementById("showdata")?.appendChild(input6);
  })



  //save content


  const save1=document.getElementById("save") as HTMLButtonElement;

  save1.addEventListener("click",function()
  {

    if(input1.value=="" || input2.value=="" || input3.value=="" || input4.value=="" || input5.value=="" || input6.value=="")
    {
      alert("Enter The Input");
    }
    else{
    edititem1[count].question1=input1.value;
    edititem1[count].option1= input2.value;
    edititem1[count].option2=input3.value;
    edititem1[count].option3=input4.value;
    edititem1[count].option4=input5.value;
    edititem1[count].answer=input6.value;
   

    localStorage.setItem(edittitle1,JSON.stringify(edititem1));
    alert("Saved successfully");
    }

  })


  // delete Content
  const delete1=document.getElementById("delete") as HTMLButtonElement;

  delete1.addEventListener("click",function()
{
    edititem1 = edititem1.filter(item => item !== edititem1[count]);
  localStorage.setItem(edittitle1,JSON.stringify(edititem1));
  if(edititem1.length==0)
  {
    alert("Course Deleted Successfully");
    const deletetitle=localStorage.getItem("titleStorage");

    var deletetitle1:titledata[]=JSON.parse(deletetitle!);

    deletetitle1=deletetitle1.filter(item=> item.title1 !=edittitle1);

    localStorage.setItem('titleStorage',JSON.stringify(deletetitle1));

    localStorage.removeItem(`${edittitle1}`);

    document.getElementById("change-button")!.style.display="none";
    return window.location.href=(".././create/create.html")
  }
   window.location.reload();
})
}
// done button

const done=document.getElementById("done") as HTMLButtonElement;

done.addEventListener('click',()=>{
    window.location.href=("../create/create.html");
})


// add button

document.getElementById("add")!.addEventListener("click",()=>{

  input1.value="";
  input2.value="";
  input3.value="";
  input4.value="";
  input5.value="";
  input6.value="";

  const h2=document.createElement("h2");

  h2.textContent="Add question";

  h2.id="addhead";

  const save1=document.createElement("button");

  save1.id="save1";

  save1.textContent="Save";

  h2.appendChild(save1);

  document.getElementById("sub-main")!.style.display="none";
  document.getElementById("addquestion")?.appendChild(h2);
   document.getElementById("addquestion")?.appendChild(para1);
   document.getElementById("addquestion")?.appendChild(input1);
   document.getElementById("addquestion")?.appendChild(para2);
   document.getElementById("addquestion")?.appendChild(input2);
   document.getElementById("addquestion")?.appendChild(para3);
   document.getElementById("addquestion")?.appendChild(input3);
   document.getElementById("addquestion")?.appendChild(para4);
   document.getElementById("addquestion")?.appendChild(input4);
   document.getElementById("addquestion")?.appendChild(para5);
   document.getElementById("addquestion")?.appendChild(input5);
   document.getElementById("addquestion")?.appendChild(para6);
   document.getElementById("addquestion")?.appendChild(input6);

   const save3=document.getElementById("save1") as HTMLButtonElement;

   save3?.addEventListener("click",()=>{
    if (input1?.value.trim() === "" || input2?.value.trim() === "" || input3?.value.trim() === "" || input4?.value.trim() === "" || input5?.value.trim() === "" || input6?.value.trim() === "") {
        alert("Enter all the options");
    } else {
        const addData: add1 = {
            question1: input1?.value.trim() ?? "",
            option1: input2?.value.trim() ?? "",
            option2: input3?.value.trim() ?? "",
            option3: input4?.value.trim() ?? "",
            option4: input5?.value.trim() ?? "",
            answer: input6?.value.trim() ?? "",
        };

        const data2: add1[] = JSON.parse(localStorage.getItem(`${edittitle1}`) || '[]');
        data2.push(addData);
        localStorage.setItem(`${edittitle1}`, JSON.stringify(data2));
        input1!.value="";
        input2!.value="";
        input3!.value="";
        input4!.value="";
        input5!.value="";
        input6!.value="";
        window.location.reload();
    }
   })
})

