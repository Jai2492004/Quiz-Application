const loginbutton=document.getElementById("login") as HTMLInputElement;

loginbutton.addEventListener("click",function()
{
    var user:userdata[]=[];
    var datastorage=localStorage.getItem("user");
    if(datastorage!=null)
    {
      user=JSON.parse(datastorage);
    }
   
    let email=document.getElementById("email") as HTMLInputElement;
    let password=document.getElementById("password") as HTMLInputElement;

 if(email.value&&password.value)
    {
        if(email.value=="jai1773@gmail.com" && password.value=="1773@#")
        {
            alert("Login successfully");
            window.location.href=("dest/admin/admin.html");
        }

        else{
            for(let i=0;i<user.length;i++)
                {
                    const u = user[i];
                    if(u.email==email.value && u.password==password.value)
                    {
                       alert("Login successfully");
                       localStorage.setItem("username",JSON.stringify(u.name));
                       window.location.href=("./dest/user/courseselection.html");
                    }
                }
            }
}
    else{
          alert("Enter Valid Details");
        }
})

