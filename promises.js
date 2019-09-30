var a = new Promise((resolve,reject)=>{
    if(true){
        resolve("my name is aditya");
    }else{
        reject("error");
    }
});
a.then((msg)=>{
    console.log(msg);
}).catch((error)=>{
    console.log(error);

// });

//output - my name is aditya.


//ex -promise all
/*let a = Promise.resolve(4);
let b = "12";
let c = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("aditya");
    },2000);
});
Promise.all([a,b,c]).then((values)=>{
    //promise.all() method to return a single promise based on three
    //promises

    console.log(values);
});*/
//output-[4,'12','aditya]


//ex - promise.race

let promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("100"),1000);
});
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("200"),2000);
});
Promise.race([promise1,promise2]).then((values)=>{
    //promice.race() method return a single promise who promise execute easily those promise return.
    console.log(values);
});
//output-100.