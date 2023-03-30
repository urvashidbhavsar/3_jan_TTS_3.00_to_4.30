function fname_reg_ex(){
    let fname = document.getElementById("fname").value;
    let regEx = /^[a-zA-Z]*$/
    if(regEx.test(fname)){
        document.getElementById("msg").innerHTML = "";
        return false;
    }else{
        document.getElementById("msg").innerHTML = "Invalid name!!!";
        return false;
    }
}
function lname_reg_ex(){
    let lname = document.getElementById("lname").value;
    let regEx = /^[a-zA-Z]*$/
    if(regEx.test(lname)){
        document.getElementById("msg1").innerHTML = "";
        return false;
    }else{
        document.getElementById("msg1").innerHTML = "Invalid name!!!";
        return false;
    }
}
function address_length(){
    let addr = document.getElementById("addr").value;
    if(addr.length < 20){
        document.getElementById("msg4").innerHTML = "enter atleast 20 charachers"
        return false
    }else{
        document.getElementById("msg4").innerHTML = ""
        return false
    }
}
function pin_reg_ex(){
    let pin = document.getElementById("pin").value;
    let pin_ex = /^[0-9]*$/
    if(pin_ex.test(pin)){
        document.getElementById("msg6").innerHTML = ""
        return false;
    }
    else{
        document.getElementById("msg6").innerHTML = "Only number allowed"
        return false;
    }
}

function pin_length(){
    let pin = document.getElementById("pin").value;
    if(pin.length < 6){
        document.getElementById("msg7").innerHTML = "Enter 6 digits"
        return false;
    }else{
        document.getElementById("msg7").innerHTML = ""
        return false;
    }
}

function mno_expression(){
    let pin = document.getElementById("mno").value;
    let pin_ex = /^[0-9]*$/
    if(pin_ex.test(pin)){
        document.getElementById("msg8").innerHTML = ""
        return false;
    }
    else{
        document.getElementById("msg8").innerHTML = "Only number allowed"
        return false;
    }
}

function mobile_length(){
    let pin = document.getElementById("mno").value;
    if(pin.length < 10){
        document.getElementById("msg9").innerHTML = "Enter 10 digits"
        return false;
    }else{
        document.getElementById("msg9").innerHTML = ""
        return false;
    }
}

function email_ex(){
    let mail = document.getElementById("mail").value;
    let reg_ex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if(reg_ex.test(mail)){
        document.getElementById("msg10").innerHTML = ""
        return false
    }else{
        document.getElementById("msg10").innerHTML = "Enter proper email"
        return false
    }
}

function passreg_ex(e,spanid){
    let reg_ex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,12}$/
    if(reg_ex.test(e.value)){
        document.getElementById(spanid).innerHTML = ""
        return false
    }else{
        document.getElementById(spanid).innerHTML = "enter proper password"
        return false
    }
}

function password_check(){
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;

    if(cpass != pass){
        document.getElementById("msg12").innerHTML = "password and confirm password does not match"
        return false;
    }else{
        document.getElementById("msg12").innerHTML = ""
        return false;
    }
}