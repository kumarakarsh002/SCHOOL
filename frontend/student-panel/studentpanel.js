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


function StudentLog(){
    alert("Student Login")
    window.location.replace("../studentdashboard/studentdashboard.html");

    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const loginform = document.getElementById("loginform");
    // const button = document.getElementById("loginbutton")

    loginform.addEventListener('submit', function(event){
        event.preventDefault();

        if(name === ''){
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

        if(username === "student" && password === "12345"){
            alert("Welcome Student" + name)
            window.location.replace("../studentdashboard/studentdashboard.html")
        }

    })
    


}