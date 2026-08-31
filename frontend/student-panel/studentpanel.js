const loginsection = document.getElementById("studentlogin")
const signUpsection = document.getElementById("studentsignup")

function SignUp(){
    loginsection.classList.add("hidden")
    signUpsection.classList.remove("hidden")
    
}

function Login() {
    loginsection.classList.remove("hidden");
    signUpsection.classList.add("hidden");
}



    
    
    const loginform = document.getElementById("loginform");
    // const button = document.getElementById("loginbutton")

    loginform.addEventListener('submit', function(event){
        const sname = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
        event.preventDefault();

        if(sname === ''){
            alert("Please enter Your name");
            return;
        }
        if(username === ''){
            alert("Please enter your username");
            return;
        }
        if(password === ''){
            alert("Please enter your password");
            return;
        }

        if(username === 'student' && password === '12345'){
            alert(`Welcome Student ${sname}`);
            window.location.replace("../studentdashboard/studentdashboard.html")
        }
        else{
            alert("Incorrect Details")
        }

    })
    


