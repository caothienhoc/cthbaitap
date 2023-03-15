var numbers = document.getElementsByClassName("num")
var checkpoint = false
window.onload = function (e) {
    for (var i = 0; i < numbers.length; i++) {
        numbers[i].onclick = function (e) {
            var a = e.target;
            var input = document.getElementById("screen");
            if (checkpoint == true) {
                document.getElementById("screen").innerHTML = "";
                checkpoint = false;
            }
            var newInput = input.innerHTML + a.innerHTML;
            input.innerHTML = newInput
        }
    }

    var ev = document.getElementById("eval")
    ev.onclick = function () {
        checkpoint = true;
        var txt = document.getElementById("screen").innerHTML.replace(/x/g, "*").replace(/÷/g, "/");
        try {
            var result = eval(txt);

            if (Number.isFinite(result) == false) {
                document.getElementById("screen").innerHTML = "lỗi"
            } else {
                document.getElementById("screen").innerHTML = result;
            }
        } catch (err) {
            document.getElementById("screen").innerHTML = err.message;
        }
    }

    var cle = document.getElementById("cle")
    // cle.onclick =function(){
    //     document.getElementById("screen").innerHTML="";
    // }

    cle.onclick = function () {
        document.getElementById("screen").innerHTML = "";
    }
}