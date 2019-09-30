var async = require("async");
async.waterfall([(callback)=>{
    setTimeout(()=>{
        console.log("clicklab");
        callback(null,1);
    },2000);
},
(value1,callback)=>{
    setTimeout(()=>{
        console.log("clicklab2");
        callback(null,value1,2);
    },1000);

},
(value2,value3,callback)=>{
    setTimeout(()=>{
        console.log("clicklab3");
        callback(null,value2,value3,3);
    },500);
},
 (value2,value3,value4,callback)=>{
        setTimeout(() => {
            console.log("clicklab4");
            callback(null,4);
            
    },200);
}
],(error,result)=>{
    if(result){
    console.log(result);
    }else{
        console.log(error);
    }
}
);
//output-clicklab,clicklab2,clicklab3,clicklab4,4.