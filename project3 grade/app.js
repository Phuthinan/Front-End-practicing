let score = prompt("What is your score?")
if(score>=80){
    document.getElementById("result").innerHTML = "Your Grade : A"
}
else if(score>=70){
    document.getElementById("result").innerHTML = "Your Grade : B"
}
else if(score>=60){
    document.getElementById("result").innerHTML = "Your Grade : C"
}
else if(score>=50){
    document.getElementById("result").innerHTML = "Your Grade : D"
}
else {
    document.getElementById("result").innerHTML = "Your Grade : F"
}