let number = prompt("number")
document.getElementById("numlot").innerHTML = number
//random from 0-1 จึงต้อง * เพื่อให้เป็นเลขตามที่เรากำหนด
var x=(Math.floor(Math.random()*100))
//แสดงใน console
console.log(x)
document.getElementById("result").innerHTML = x
if(number==x){
    document.getElementById("final").innerHTML = "ยินดีด้วยคุณถูกรางวัล"
}
else{
    document.getElementById("final").innerHTML = "เสียใจด้วยคุณไม่ถูกรางวัล"
}