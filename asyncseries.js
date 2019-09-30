var async = require("async");
//series calls the final callback function on every execution of the function.
async.series([(callback)=>{
    setTimeout(()=>{
        console.log("series one");
        callback(null,1);
    },3000);
},
    (callback)=>{
        setTimeout(()=>{
            console.log("first execute hone ke bad");
            callback(null,2);
        },2000);
       
        },
        (callback)=>{
            setTimeout(()=>{
                console.log("second ke bad");
                callback(null,'complete')
            },1000);
        }],
        (error,results)=>{
            console.log(results);
        });
        //output - series one
        //first execute hone ke bad
        //second ke bad
       // [1,2,'complete']
    
