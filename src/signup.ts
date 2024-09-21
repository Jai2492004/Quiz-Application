interface userdata{
    name:string;
    email:string;
    password:string;
}

let signup=document.getElementById("signup") as HTMLButtonElement;


if(signup!=null)
{

    signup.addEventListener("click",function()
    {

        let name1=document.getElementById("name") as HTMLInputElement;
        let email1=document.getElementById("email") as HTMLInputElement;
        let password1=document.getElementById("password") as HTMLInputElement;
        let password2=document.getElementById("confirm") as HTMLInputElement;

        var f=0;
if(name1.value==""||email1.value=="" ||password1.value==""||password2.value=="")
    {

        alert("Enter the details");

    }
    else if(!email1.value.includes("@"))
    {

        alert("Enter the valid email");

    }
    else if(password1.value!=password2.value)
    {

        alert("Enter valid password");

    }
    else if(email1.value=="jai1773@gmail.com")
    {
        alert("Emial already exist");
    }
    else if(email1!.value&& name1.value)
    {
        var user:userdata[]=[];
        var datastorage=localStorage.getItem("user");
        if(datastorage!=null)
        {
          user=JSON.parse(datastorage);
        }
        for(let i=0;i<user.length;i++)
            {
                const u = user[i];
                if(u.name==name1.value)
                {
                   alert("User name already exist");
                   f=1;
                   return;
                }
                if(u.email==email1.value)
                {
                    alert("Email already exist");
                    f=1;
                    return;
                }
            }
            if(password1.value==password2.value && f==0)
                {
            
                    const userdatalist: userdata=
                    {
            
                        name:name1.value,
                        email:email1.value,
                        password:password1.value,
            
                    }
                
                    const user1 = get();
                    user1.push(userdatalist);
                    localStorage.setItem('user', JSON.stringify(user1));
                    alert("Register successfully");
                    window.location.href=("../../index.html");
                }
    }
    
})

}

function get() : userdata [] {

    const users = localStorage.getItem('user');
    return users ? JSON.parse(users) : [];

}
