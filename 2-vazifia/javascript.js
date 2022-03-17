var  a = +prompt("sonni kiriting")
while ( isNaN(a) || a == 0 ) {
    var  a = +prompt("sonni kiriting")
   }
   let d = "⬜"
   let f = "⬛"
    let c = ""
for (let x = 0; x <= a; x++) {        
    for (let y = 0; y <= a; y++) {
        if (x == 0 || y == 0  || x == y || x == a  || y== a) { 
            c += d  }
         else  {
            c += f  }
       
    } console.log(c);
        c =""
      }
