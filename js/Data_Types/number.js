var x=10;
console.log(typeof x);
console.log(typeof typeof x);

x=10.21; 
console.log(typeof x);
console.log(x);

x=0345; //octal value
console.log(typeof x);
console.log(x);

x=0xabc; //hexadecimal value
console.log(typeof x);
console.log(x);

x=0b1010; //binary value
console.log(typeof x);
console.log(x);

x=1e+2; //exponential value 1 followed by 2 zeros=>100
console.log(typeof x);
console.log(x);

x=1e308; //exponential value 1 followed by 308 zeros
console.log(typeof x);
console.log(x);

x=1e309; //exponential value 1 followed by 309 zeros=> infinity but still number
console.log(typeof x);
console.log(x);

x=10/'a'; //NaN 
console.log(typeof x); //number
console.log(x);



