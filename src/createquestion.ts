
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


const addQuestion = document.getElementById("add") as HTMLButtonElement;

interface add1 {
    question1: string;
    option1: string;
    option2: string;
    option3: string;
    option4: string;
    answer: string;
}

var titlestorage:titledata[]=[];

    var datastorage=localStorage.getItem("titleStorage");
    if(datastorage!=null)
    {
      titlestorage=JSON.parse(datastorage);
    }

    const title=titlestorage[titlestorage.length-1];
    
    const titlename=title.title1;

   const h2= document.getElementById("titlebar") as HTMLHeadElement;

   if (h2 && h2.textContent !== null && h2.textContent !== null) 
    {
    h2.textContent = `Title: ${titlename}`;
    }


addQuestion.addEventListener("click", function () {
    const question1 = document.getElementById("question") as HTMLInputElement | null;
    const option11 = document.getElementById("option1") as HTMLInputElement | null;
    const option21 = document.getElementById("option2") as HTMLInputElement | null;
    const option31 = document.getElementById("option3") as HTMLInputElement | null;
    const option41 = document.getElementById("option4") as HTMLInputElement | null;
    const answer1 = document.getElementById("answer") as HTMLInputElement | null;

    
  
    if (question1?.value.trim() === "" || option11?.value.trim() === "" || option21?.value.trim() === "" || option31?.value.trim() === "" || option41?.value.trim() === "" || answer1?.value.trim() === "") {
        alert("Enter all the options");
    } else {
        const addData: add1 = {
            question1: question1?.value.trim() ?? "",
            option1: option11?.value.trim() ?? "",
            option2: option21?.value.trim() ?? "",
            option3: option31?.value.trim() ?? "",
            option4: option41?.value.trim() ?? "",
            answer: answer1?.value.trim() ?? "",
        };

        const data2: add1[] = JSON.parse(localStorage.getItem(`${titlename}`) || '[]');
        data2.push(addData);
        localStorage.setItem(`${titlename}`, JSON.stringify(data2));
        question1!.value="";
        option11!.value="";
        option21!.value="";
        option31!.value="";
        option41!.value="";
        answer1!.value="";
    }
});



const save=document.getElementById("save") as HTMLButtonElement;

save.addEventListener("click",function()
{
  window.location.href=("../create/create.html");
})