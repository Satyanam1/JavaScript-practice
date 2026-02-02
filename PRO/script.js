
// Q1
/* let i=1;
while(i<=10){
    console.log(i);
    i++;
    
} */

// Q2 sum of first N natural number

/* let sum=0;
num=+prompt("Enter a number")
let i=1;
while(i<=num){
    sum=sum+i;
    i++
}
console.log(sum); */

// Q3

/* let factorial = 1;
num=+prompt("Enter a num")
let i=1;
while(i<=num){
    factorial = factorial*i;
    i++
}
console.log(factorial); */

//  Q5 Reversing a number

/* let rev=0;
let n = +prompt("Enter a number");
while(n>0){
    let rem = n%10;
    rev = (rev*10)+rem;
    n=Math.floor(n/10);
}
console.log(rev); */


// Q7 SUm of digit of number

/* let sum=0;
let num=+prompt("Enter any digit number")
while(num>0){
    let rem = num%10;
    sum = sum+rem;
    num=Math.floor(num/10);
}
console.log(sum); */

// Q6 Prime or Not

/* let num= +prompt("Enter a number")
let i=2;
let isprime=true;

while(i<num){
    if(num%i==0){
        isprime = false;
        break;
    }
    i++;
}
if(isprime) console.log("Prime Number");
else console.log("Not prime"); */

// Q8 Largest digit in a number

/* let largest=0;
let n=+prompt("Enter a number")
while(n>0){
    let digit = n%10;
    if(digit>largest){
        largest=digit;
    }
    n=n/10;
}
console.log(Math.floor(largest)); */

// Q9 GCD of two number

/*  let small,large,hcf;
small=+prompt("Enter number")
large=+prompt("Enter number")
let smallest=small<large?small:large;
for(let i=1;i<=smallest;i++){
    if(small%i==0 && large%i==0){
        hcf=i;
    }
} 
console.log(hcf); */ 

// let a = +prompt("Enter first number")
// let b = +prompt("Enter second number")

// while(b!==0){
//     let remainder = a%b;
//     a=b;
//     b=remainder;
// }
// console.log(a);


// Q10

    
// let i=1;
// let n=4;

// while(i<=n){
//     let j=1;
//     let line = "";
//     while(j<=i){
//         line += j;
//         j++;
//     }

//     console.log(line);
//     i++;
    
// }

// document.getElementById('sat').innerHTML="The browser is: "+ navigator.onLine;
// document.getElementById('satt').innerHTML="The browser is: "+ navigator.platform;
// document.getElementById('satt').innerHTML="The browser version is: "+ navigator.appVersion;
// document.getElementById('satyam').innerHTML="The language is: "+ navigator.language

//  document.getElementById("btn1").addEventListener("click",mySum);

//  function mySum(){
//     let no1 = Number(document.getElementById("no1").value);
//     let no2 = Number(document.getElementById("no2").value);
//     let ans = no1+no2;
//     document.getElementById("demo").innerHTML = "addition: "+ans
//  }



//  const box = document.getElementById("box");
//  box.addEventListener("mouseover",function(){
//     box.innerHTML="5201314❤️😘"
//     box.style.backgroundColor="pink"
//  })

//  box.addEventListener("mouseout",function(){
//     box.innerHTML="Byee"
//        box.style.backgroundColor="white"
//  })


// document.getElementById("btn1").addEventListener("click",myCal);

// function myCal(){
//     let phy = Number(document.getElementById("phy").value);
//     let che = Number(document.getElementById("che").value);
//     let math = Number(document.getElementById("math").value);
//     let eng = Number(document.getElementById("eng").value);

//     let total = phy+che+math+eng;
//     let per = total/4;

//     document.getElementById("demo").innerHTML="Total marks: "+total;
//     document.getElementById("demo1").innerHTML="percentage: "+per;
// }


// document.getElementById("btn1").addEventListener("click",mycal);

// function mycal(){
//     let age = Number(document.getElementById('age').value);
//     let gen = Number(document.getElementById('gen').value);
//     let hei = Number(document.getElementById('hei').value);
//     let wei = Number(document.getElementById('wei').value);

//     let men= (10*wei)+(6.25*hei)-(5*age)+5;
//     let women= (10*wei)+(6.25*hei)-(5*age)+5;

//     document.getElementById("first").innerHTML="for men: "+men;
//     document.getElementById("second").innerHTML="for women: "+women;
// }


// let n=11;
// if((n/2)*2==n){
//     console.log("even");
    
// }else{
//     console.log("odd");
    
// }










