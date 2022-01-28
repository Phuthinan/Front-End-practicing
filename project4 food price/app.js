let quantity = prompt("จำนวนสินค้า")
let price=0
for(var i=1;i<=quantity;i++){
    let item_price=prompt("ราคาสินค้า"+i)
     document.getElementById("price-list").innerHTML += "รายการสินค้าชิ้นที่"+i+": "+item_price+" บาท"+"<br>" 
    price+=parseInt(item_price)
    console.log(i)
}
document.getElementById("price").innerHTML="ราคารวมทั้งหมด "+ price + " บาท"