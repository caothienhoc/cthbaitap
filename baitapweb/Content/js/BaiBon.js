
var btn = document.getElementById("button")
btn.onclick = function () {

    var nameVal = document.getElementById("name").value;
    var emailVal = document.getElementById("email").value;
    var messVal = document.getElementById("mes").value;
    //var check = document.getElementById("vehicle1").value;

    if (nameVal == "") {
        document.getElementById("warnName").innerHTML = "chưa nhập tên !!!";
    } else {
        document.getElementById("warnName").innerHTML = "";
    }

    if (emailVal == "") {
        document.getElementById("warnEmail").innerHTML = "chưa nhập email !!!"
    } else {
        document.getElementById("warnEmail").innerHTML = ""
    }

    if (messVal == "") {
        document.getElementById("warnMes").innerHTML = "chưa nhập message !!!";;
    } else {
        document.getElementById("warnMes").innerHTML = "";
    }

}


// function send(){
//    document.getElementById("warn");
//     var nameVal = document.getElementById("name").value;
//     var emailVal = document.getElementById("email").value;
//     var messVal =document.getElementById("mes").value;
//     //var check = document.getElementById("vehicle1").value;

//     if(nameVal==""){
//         document.getElementById("warnName").innerHTML= "chưa nhập tên !!!";
//     }else{
//         document.getElementById("warnName").innerHTML = "";
//     }

//     if(emailVal ==""){
//         document.getElementById("warnEmail").innerHTML = "chưa nhập email !!!"
//     }else{
//         document.getElementById("warnEmail").innerHTML = ""
//     }

//     if(messVal ==""){
//         document.getElementById("warnMes").innerHTML = "chưa nhập message !!!";;
//     }else{
//         document.getElementById("warnMes").innerHTML = "";
//     }


// }