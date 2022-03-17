let  son = +prompt("ishlamoqchi bo`lgan misollar miqdorini kiriting")
while ( isNaN(son) || son == 0 ) {
    son = +prompt("ishlamoqchi bo`lgan misollar miqdorini kiriting")
   }
   
  
  for (let i = 0; i < son; i++) {
        a =Math.floor( Math.random() * 5 +1)
  
  
  
    if (a == 1 ) { 
      b = Math.floor(Math.random()*10+1)
      c = Math.floor(Math.random()*10+1)
      let javob = +prompt( b +" + " + c)
      while ( isNaN(javob) || javob == 0 ) {
        javob = +prompt( b +" + " + c)
       }
      if (javob == b + c) { console.log("siz to`g`ri javob berdingiz " +javob );
    }else{ console.log("siz noto`g`ri javob berdingiz: "+ javob +". to`g`ri javob " + (b + c)) }
           }
           
         else if (a == 2 ) { 
            b = Math.floor(Math.random()*10+1)
            c = Math.floor(Math.random()*10+1)
            let javob = +prompt( b +" * " + c)
            while ( isNaN(javob) || javob == 0 ) {
              javob = +prompt( b +" * " + c)
             }
            if (javob == b * c) { console.log("siz to`g`ri javob berdingiz " +javob );
          }else{ console.log("siz noto`g`ri javob berdingiz: "+ javob +". to`g`ri javob " + (b * c)) }
                 }
                 else if (a == 3 ) { 
                  b = Math.floor(Math.random()*10+1)
                  c = Math.floor(Math.random()*10+1)
                  let javob = +prompt( b +" / " + c)
                  while ( isNaN(javob) || javob == 0 ) {
                    javob = +prompt( b +" / " + c)
                   }
                  if (javob == b / c) { console.log("siz to`g`ri javob berdingiz " +javob );
                }else{ console.log("siz noto`g`ri javob berdingiz: "+ javob +". to`g`ri javob " + (b / c)) }
                       }              
                       else if (a == 4) { 
                        b = Math.floor(Math.random()*10+1)
                        c = Math.floor(Math.random()*10+1)
                        let javob = +prompt( b +" - " + c)
                        while ( isNaN(javob) || javob == 0 ) {
                          javob = +prompt( b +" - " + c)
                         }
                        if (javob == b - c) { console.log("siz to`g`ri javob berdingiz: " +javob );
                      }else{ console.log("siz noto`g`ri javob berdingiz: "+ javob +". to`g`ri javob " + (b - c)) }
                             }  
                             else if (a == 5 ) { 
                        b = Math.floor(Math.random()*10+1)
                        c = Math.floor(Math.random()*10+1)
                        let javob = +prompt( b +" % " + c)
                        while ( isNaN(javob) || javob == 0 ) {
                          javob = +prompt( b +" % " + c)
                         }
                        if (javob == b % c) { console.log("siz to`g`ri javob berdingiz " +javob );} 
                        else{ console.log("siz noto`g`ri javob berdingiz: "+ javob +". to`g`ri javob " + (b % c)) }
                             }  
    }
    
   
 

  
 
  
   

   