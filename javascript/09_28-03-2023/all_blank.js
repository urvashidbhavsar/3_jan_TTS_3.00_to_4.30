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
    if(fname == "" && lname == "" && male == false && female == false && other == false && cdate == "" && addr == "" && city == -1 && pin== ""){
        document.getElementById("msg").innerHTML = "Enter first name"
        document.getElementById("msg1").innerHTML = "Enter Last name"
        document.getElementById("msg2").innerHTML = "Select Gender"
        document.getElementById("msg3").innerHTML = "Select date"
        document.getElementById("msg4").innerHTML = "Enter Address"
        document.getElementById("msg5").innerHTML = "Select city"
        document.getElementById("msg6").innerHTML = "Enter pincode"
        return false
    }

    // if(city == -1){
    //     document.getElementById("msg5").innerHTML = "Select city"
    //     return false
    // }
}

function blank_value(e,msg){
    if(e.value == ""){
        document.getElementById(msg).innerHTML = "Enter name"
        return false
    }
}