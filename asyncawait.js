
    async function multiply(){
        let promise = new Promise((resolve,reject)=>{
            setTimeout(()=>resolve(2*3*4),2000)
        });
        let result = await promise;
        console.log(result);
    }
    multiply();
    //output-24.

    //ex2

class clicklab{
        constructor(name,age){
            this.name =name;
            this.age = age;
        }
        then(resolve,reject){
            setTimeout(()=>resolve(`name = ${this.name} age = ${this.age}`),1000);

        }
    };
    async function f(){
        let result = await new clicklab("aditya",20);
        console.log(result);
    }
    f();
    
    //output-name=aditya age=20
    



