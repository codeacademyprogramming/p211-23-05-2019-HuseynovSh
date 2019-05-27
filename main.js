
//**************************************************************

/*
Filter metodundan istifadə edərək rəqəmlərdən ibarət bir array-də
 yalnız 5-ə bölünən rəqəmləri ayrıca bir array-ə doldurun.
*/

let numbers = [2, 5, 10, 15, 18, 20, 23, 25, 30, 35, 40];
let divide5 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value % 5 === 0;
}
console.log(divide5)

//**************************************************************

/*
Map metodundan istifadə edərək
 array-də olan bütün rəqəmləri 2 dəfə artırın.
*/
let numbers2 = numbers.map(myFunction2);
function myFunction2(value, index, array) {
  return value * 2;
}
console.log(numbers2)

//**************************************************************

/*
Map metodundan istifadə edərək sözlərdən ibarət bir array-də
bütün sözləri tən yarıya bölərək array-i dəyişin.
*/





//**************************************************************

/*
Reduce metodundan istifadə edərək array-də olan rəqəmlərdən
 yalnız cütləri cəmləyin.
*/

let even = numbers.filter(myFunction3);
function myFunction3(value, index, array) {
  return value % 2 === 0;
}

let sum = even.reduce(myFunction_reduce);

function myFunction_reduce(total, value, index, array) {
  return total + value;
}
console.log(sum)


//**************************************************************

/*
Reduce metodundan istifadə edərək array-də olan rəqəmlərdən 
yalnız 5-ə qalıqsız bölünənləri cəmləyin.
*/

let divide5_2 = numbers.filter(myFunction4);
function myFunction4(value, index, array) {
  return value % 5 === 0;
}

let sum2 = divide5_2.reduce(myFunction_reduce2);

function myFunction_reduce2(total, value, index, array) {
  return total + value;
}
console.log(sum2)



//**************************************************************

/*
Find metodundan istifadə edərək emaillərdən ibarət bir array-də
 ilk "code.edu.az" domain-i olan emaili tapın.
*/

let domains = ["code.edu.tr", "codeacademy.edu.az", "code.edu.az", "cod.edu.az",]
let domain = domains.indexOf("code.edu.az");

console.log(domain + 1);


//**************************************************************