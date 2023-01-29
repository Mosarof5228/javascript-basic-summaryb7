//1.What is javascript?
//Ans:Javascript is a interpreted autometical dynamic programing language.
//2.How does javascript work?
//Ans:javascsript work dinamically because it is a dynamic programing language.
//3.What is variable?
//Ans:variable is a keyword,it's chanable and strore many data.
//4.Declear a variable.we need five thing.
//Ans:var name="Md.Mosarof Hossen";
//5.Types of variable?how can we find out type of a variable?
//Ans:There are three types of variable.i.string ii.number. iii.boolean
//5.1How can we find out type of a variable?
//Ans:var name="Md.Mosarof Hossen";
//var name="Md.Mosarof Hossen";
//var name=typeof(name);
//output:string;
//6.Primitive and non-primitive data type.
//Ans:primitive data type and non-primitive data type.
//i.primitive data types are string,number and boolean and primitive data types contain single value.
//ii.non-primitive data types are___array and objects.and non-primitive data type contains multiple value.
//7.Naming convention of js variables.
//Ans:do:we shouldUseCamelCase
//ii.We can use underscroll_;
//iii.we can use $dollar sign but not start;
//iv.we can use number but not starting.
//Ans:don't:we can not use dash(-);
//ii.we can not use number at first of variable.
//iii.we can not use dash at first of variable.
//8.Math operation
//Ans:+,-,*,/,%(modulus or bagses);
//9.shorthand.
//Ans:+=,-+,*=,/=,++,(1 increase hobe)(--)i decrease hobe.
//Ans:x+=1;x=x+1;


//10.parseInt,parseFloat
//Ans:for convert string to number we use parseInt, and parseFloat.
//Example:
/* var number = "50";
number = typeof (number);
var convertStringToNumber = parseInt(number);
console.log(typeof convertStringToNumber); */



//11.foFixed();mane holo 0.30000000000000004  dosomik er pore amn ashle amra koi gor porjonto nibo ta thik korar jonne.
//Example:
/* var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
console.log(sum.toFixed(2)) */


//12.What is the purpose of Array.
//Ans:The purpose of array is to strore multiple value that means it contains multiple or more value together;
//13.How to Declear an array in js.
//Ans: var marks=[20,30,50,10,40];


//14.Number of elements in an array.
/* var marks = [20, 30, 50, 10, 30];
var arrayLengthIs = marks.length;
console.log(arrayLengthIs);
 */

//15.What is index and how does it work?
// Ans:index number always start from zero(0)

//16.Find the value of an element by index?
/* var numbers = [10, 30, 22, 60, 100, 300, 2];
var third = numbers[2];
console.log(third); */


//17.set an element by index?
/* var marks = [20, 30, 50, 100, 200];
marks[3] = 500;
console.log(marks); */

//18.get the index of an element by the value?
/* var numbers = [10, 20, 30, 200, 300, 600];
var indexNumber = numbers.indexOf(30);
console.log(indexNumber); */


//19.What does it mean when you get undefined while getting the value of an element by index?

//20.How can you add an element to an array at the last position?
/* var friends = ['rahim', 'karim', 'sagor'];
friends.push("Md.Mosarof Hossen");
console.log(friends);
 */

//21.How can we remove an element from an array at the last position?
/* var friends = ['rahim', 'karim', 'sagor'];
friends.pop();
console.log(friends);
 */

//22.How can we add an element at the first position?
/*  var friends = ['rahim', 'karim', 'sagor'];
friends.unshift("Md.Mosarof Hossen");
console.log(friends);
 */


//23.How can we remove an element at the first position?
/* var friends = ['Md.Mosarof Hossen', 'rahim', 'karim', 'sagor'];
friends.shift();
console.log(friends); */

//24.meaning of:>,<,>=,<=,==,===,!=;

//25.meaning of &&(and) ||(or)

//26.Let's say you have 55000 amount of money.if you have more than 80,000than

// 27.display "ajke amar mon valu nei"for 39 times.
/* for (var i = 0; i <= 39; i++) {
    console.log("ajke amar mon valo nei");

} */

//28.Display Numbers between 58 to 98;
/* for (var i = 58; i <= 98; i++) {
    console.log(i);
} */

//29.show all even number from 412 to 456;
/* var i = 412;
while (i <= 456) {
    console.log(i);
    i += 2;
} */

/* for (var i = 412; i <= 456; i += 2) {
    console.log(i);
}
 */

//30.show all odd numbers 581 to 456;

//31.different between for loop and while loop?



//32.declear an array for all the topics that you have learned last few days display then as output by loop.
/* var contents = ['html', 'css', 'bootstrap', 'tailwind', 'js'];
for (var i = 0; i < contents.length; i++) {
    console.log(contents[i]);
} */


//33.Creat an array for all the mobaile phone used  and output by use loop.



//34.Run a loop from 30 to 86.this loop will stop if the values get higher then 44.

/* for (var i = 0; i <= 86; i++) {
    if (i >= 44) {
        break;
    }
    console.log(i);
} */

//35.Write the price of the books that you have display the prices if the prices is lover than 200;
var books = [20, 200, 300, 300, 20, 30, 40, 43, 66, 45, 23, 30, 600];
for (var i = 0; i < books.length; i++) {
    var book = (books[i]);
    if (book >= 200) {
        continue;
    }
    console.log(book)

}