//  console.log("dei unathanda");
//   document.write("Hello mamae");
//  alert("Deiiii");

//varaibles
//let, var, const

// let apple
// apple=10
// console.log(apple)

// const year=2024;
//year=2023;
// console.log(year);

// datatype
// primitive
// Number
// Boolean
// string
// undefined

// let a
// let b=true
// let c="false"
// let d=5
// console.log(typeof(a))
// console.log(typeof(b))
// console.log(typeof(c))
// console.log(typeof(d))

// let array=[1,2,3,4]
// console.log(typeof(array))
// console.log(array)

//functions
//syntax
 //function functionName()
 //{
//     set of codes
//     return
// }
// call the function
// function name

// operators
// arithmatic operetor
// +,-,*,*./,%,++,--

//  let a=10
//  let b=25
// let c=a>b
// let d=a<b
// let e=a>=b
// let f=a<=b
// let g=a!=b
//  console.log(a)
//  console.log(b)
 //console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)
// console.log(g)

// syntax for switch
// switch(expression){
// case value1:
//     Code
// break
// default:
//     code
// }

//loops
//syntax
// for(inialiazation:condition:increment)
// {

// }

// while(condition)
// {
//     inc/dec
// }

// for (let i=0;i<=100;i++)
// {
//     console.log(i)
// }

//dom
// document.getElementById('idName')
// document.getElementsByClassName('className')
// document.querySelector('query')
// document.querySelectorAll('query')


// et button=document.getElementById('button')
//     button.addEventListener('click',()=>{
//       function myfucn() {
    
//  let a=parseInt(document.getElementById('kar').value);
//     let b=parseInt(document.getElementById('kar1').value);
//     let c=document.getElementById('out')
//         c.value=a+b
//      }

     function getRandomPaleColor(){
        const r=Math.floor(Math.random() * 100) + 150;
        const g=Math.floor(Math.random() * 49) + 150;
        const b=Math.floor(Math.random() * 73) + 150;
        return `rgb(${r}, ${g}, ${b})`; 
    
    }
    function changeBackgroundColor(){
        const randomColor = getRandomPaleColor();
        document.body.style.backgroundColor=randomColor;
}
setInterval(changeBackgroundColor, 30);
    

        
        

