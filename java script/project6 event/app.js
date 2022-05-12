function toCel(fah){
    let val=(fah-32)*5/9
    return val.toFixed(2)+"°C";
}
function display(elementID,val){
    document.getElementById(elementID).innerHTML="<b>"+val+"<b>"
}
function toFah(cel){
    let val=(cel*9)/5+32
    return val.toFixed(2)+"°F"
}
function toCelProg(val){
    alert(toCel(val))
}
function toFahProg(val){
    alert(toFah(val))
}

