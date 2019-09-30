function *generator(){
    yield 1;
    yield 2;
    yield 3;
}
var result = generator();
console.log(result.next());
console.log(result.next());
console.log(result.next());
//output-{value:1, done:false}
//{value:2,done:false}
//{value:3,done:false}


//ex 2
/*function *series(){
    let i = 2;
    while(i>0){
        yield i;
        i++

    }
}
let store = series();
console.log(store.next().value);

console.log(store.next().value);

console.log(store.next().value);/*
//output-2,3,4.

/*function *substract(x){
    yield x-1;
    yield y = yield(x+10);
    y = 7;
    return x-y;

}
var generator = substract(15);
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next()); */

//output{value:14,done:false}
// {value:2done5,:false}
// {value:undefined,done:false}
// {value:8,done:true}



/*const Object = {
    *generator(){
        yield 'a';
        yield 'b';
    }
}
const result = Object.generator()
console.log(result.next());
console.log(result.next());
console.log(result.next());
//output {value:'a',done:false}
//{value:'b',done:false}*/








