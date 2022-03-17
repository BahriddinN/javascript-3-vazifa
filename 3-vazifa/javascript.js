let  ism = prompt("ismingizni kiriting")
while ( !isNaN(ism) || ism== 0 ) {
     ism = prompt("ismingizni kiriting")
  }
  let  yil = +prompt("hozirgi yilni kiriting")
while ( isNaN(yil) || yil==0 ) {
    yil = +prompt("hozirgi yilni kiriting")
  }
  let  a = +prompt("tug`ilgan yilingizni kiriting")
while ( isNaN(a) || a==0 ) {
    a = +prompt("tug`ilgan yilingizni kiriting")
  }
  
  function yillar(b , c ) {
      return b - c
  }
  console.log( ism +", yoshingiz " + yillar(yil, a));