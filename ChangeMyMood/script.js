//functions to change face

document.getElementById("happyBtn").onclick = function(){
    document.getElementById("face").innerHTML = "😆";
    document.body.style.background = "#ffffe0"
}

document.getElementById("sadBtn").onclick = function(){
    document.getElementById("face").innerHTML = "😞";
    document.body.style.background = "#0000ff"
}

document.getElementById("angryBtn").onclick = function(){
    document.getElementById("face").innerHTML = "😡";
    document.body.style.background = "#ff0000"
}

document.getElementById("surpriseBtn").onclick = function(){
    document.getElementById("face").innerHTML = "😮";
    document.body.style.background = "#Ffa500"
}