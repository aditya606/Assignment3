function Delta(callback){
    a =10;
    b =20;
    c =a+b;
    callback(c);
}
Delta((c)=>{
    console.log(`cost of book is ${c}`)
});
//output - cost of book is 30



//ex - callback hell
function first(val,callback){
    
callback(val+2,false);
}
function second(val,callback){
    callback(val+2,false);


}
function third(val,callback){
    callback(val+2,false);

}
first(4,function(firstresult,error){
    if(!error){
        console.log(firstresult);
        second(firstresult,function(secondresult,error){
            if(!error){
                console.log(secondresult);
                third(secondresult,function(thirdresult,error){
                    if(!error){
                        console.log(thirdresult);
                    }
});
            }
        });
    }
});
//output-6,8,10.
