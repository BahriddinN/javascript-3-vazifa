const obj = cartObj()


b = 0
c = 10000
a = ""
for( const key in obj){
    a = a + key + " " + obj[key].info
    b = b + obj[key].price 
}
b = b + c

console.log(`Sizning buyurmangiz: ${a}. Umumiy narx: ${b}. Yetkazib berish hizmati: ${c}`);