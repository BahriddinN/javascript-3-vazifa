let  b = +prompt("qo`ylar sonini kiriting")
while ( isNaN(b) || b == 0 ) {
      b = +prompt("FAQAT qo`ylar sonini kiriting")
  }
    
    for (let a = 1; a < b + 1; a++) {
        if (a == 1 ) { console.log(a +" qo`y"); }
        else{
            console.log(a + " qo`ylar");
        }      
    }
    