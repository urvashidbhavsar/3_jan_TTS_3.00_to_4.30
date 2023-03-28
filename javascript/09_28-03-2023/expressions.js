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
        document.getElementById("msg7").innerHTML = "Maximum 6 charachters"
        return false;
    }else{
        document.getElementById("msg7").innerHTML = ""
        return false;
    }
}