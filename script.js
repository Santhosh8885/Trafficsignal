document.getElementById("onButton").onclick = onLights;
document.getElementById('stopButton').onclick = illuminateRed;
document.getElementById('slowButton').onclick = illuminateYellow;
document.getElementById('goButton').onclick = illuminateGreen;
document.getElementById('offButton').onclick = clearLights;
function onLights() {
    clearLights();
    let i = 0
    while (i < 10){
    var x = document.getElementById("stopLight");
    setTimeout(function () { x.style.backgroundColor = "red" }, 50);


    var y = document.getElementById('slowLight')
    setTimeout(function () { y.style.backgroundColor = "yellow" }, 750);


    var z = document.getElementById('goLight')
    setTimeout(function () { z.style.backgroundColor = "green" }, 1500);

    var x = document.getElementById("stopLight");
    setTimeout(function () { x.style.backgroundColor = "black" }, 750);


    var y = document.getElementById('slowLight')
    setTimeout(function () { y.style.backgroundColor = "black" }, 1500);


    var z = document.getElementById('goLight')
    setTimeout(function () { z.style.backgroundColor = "black" }, 2500);
    i++
    }
}

function illuminateRed() {
    clearLights();
    document.getElementById('stopLight').style.backgroundColor = "red";
}

function illuminateYellow() {
    clearLights();
    window.myVar = setInterval(setColor, 500);

    function setColor() {
        var x = document.getElementById('slowLight');
        x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "black" : "yellow";
    }

}
function illuminateGreen() {
    clearLights();
    document.getElementById('goLight').style.backgroundColor = "green";
}
function clearLights() {
    document.getElementById('stopLight').style.backgroundColor = "black";
    document.getElementById('slowLight').style.backgroundColor = "black";
    document.getElementById('goLight').style.backgroundColor = "black";
    clearInterval(window.myVar)
    clearInterval(window.col)


}