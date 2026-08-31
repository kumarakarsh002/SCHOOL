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
}