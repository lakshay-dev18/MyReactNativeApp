// forEach

// const fruits=["Apple","Mango","Banana"];

// fruits.forEach(function(Data){
//     console.log(Data);
// })


// reduce

const numbers=[1,2,3,4,5,6];

// const sum = numbers.reduce((sum,item)=> sum+item )
// console.log(sum)


//filter
const filters = numbers.filter(number=> number>2);
// console.log(filters)

//Some
const data = numbers.some(number=> number>5);
console.log(data)

//Every
// const num =[1,4,6,8,10]
// const data = num.every(num=> num%2==0)
// console.log(data)

//flatmap
// const num=[1,2,3];
// const data = num.flatMap(number=>[number,number*2])
// console.log(data)

//map
// const data = numbers.map(number=>number*2)
// console.log(data)