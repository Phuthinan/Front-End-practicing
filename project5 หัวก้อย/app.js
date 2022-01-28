let round=prompt("How many times")
for(var i=0;i<round;i++){
    var ans=prompt("H or T ?")
    var rand_ans=""
    if(Math.floor(Math.random()*10)<=5){
        rand_ans="H"
    }
    else{
        rand_ans="T"
    }
    if(ans==rand_ans){
        alert("correct")
    }
    else{
        alert("sad")
    }
    document.getElementById("game-list").innerHTML += "round"+(i+1)+": Your choice: "+ans+" The answer: "+rand_ans+"<br>"
}