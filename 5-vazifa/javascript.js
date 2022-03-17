
   for (let i = 1; i <= 10; i++) {
    a = prompt("ismingizni kiriting", "name")
    b = +prompt("yoshingizni kiriting", "25")
while ( isNaN(b) || b == 0 ) {
    b = +prompt("iltimos faqat yoshingizni kiriting")
   }
       console.log("foydalanuvchi " + i);
    console.log("Ismi: " + a );
    console.log("Yoshi: " + b);
}