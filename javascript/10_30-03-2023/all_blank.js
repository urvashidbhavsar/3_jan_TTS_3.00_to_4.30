function form_valid(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;
    var other = document.getElementById("other").checked;
    var cdate = document.getElementById("cdate").value;
    var addr = document.getElementById("addr").value;
    var city = document.getElementById("city").value;
    var pin = document.getElementById("pin").value;
    var mno = document.getElementById("mno").value;
    var mail = document.getElementById("mail").value;
    var pass = document.getElementById("pass").value;
    if(fname == "" && lname == "" && male == false && female == false && other == false && cdate == "" && addr == "" && city == -1 && pin== "" && mno == "" && mail == "" && pass == ""){
        document.getElementById("msg").innerHTML = "Enter first name"
        document.getElementById("msg1").innerHTML = "Enter Last name"
        document.getElementById("msg2").innerHTML = "Select Gender"
        document.getElementById("msg3").innerHTML = "Select date"
        document.getElementById("msg4").innerHTML = "Enter Address"
        document.getElementById("msg5").innerHTML = "Select city"
        document.getElementById("msg6").innerHTML = "Enter pincode"
        document.getElementById("msg8").innerHTML = "Enter mobile no"
        document.getElementById("msg10").innerHTML  = "Enter Email"
        document.getElementById("msg11").innerHTML  = "Enter password"
        // document.getElementById("mno").innerHTML = "<style>#mno{border:1px solid red;}</style>"
        // document.body.style.borderColor
        return false
    }

    // if(city == -1){
    //     document.getElementById("msg5").innerHTML = "Select city"
    //     return false
    // }
}
function blank_value(blank,msg){
    if(blank.value == ""){
        document.getElementById(msg).innerHTML = "please fill this value"
        return false
    }
}

// hide and show password

function hide_show(){
    let pass = document.getElementById("pass");
    let icon = document.querySelector("#show")
    if(pass.type == "password"){
        pass.type="text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }else{
        pass.type="password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

function hide_show_1(){
    let cpass = document.getElementById("cpass");
    let icon = document.querySelector("#show1")
    if(cpass.type == "password"){
        cpass.type="text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }else{
        cpass.type="password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}