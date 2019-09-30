var async = require('async');
async.auto({
    getName: function (callback) {
        var name = "Aditya";
        callback(null, name);
    },
    getAge: function (callback) {
        var age = 20;
        callback(null, age);
    },
    getDetail: ['getName', 'getAge', function (result, callback) {
        var gender = "male"
        var address = "panchkula"
        var detail = `My name is ${result.getName} and age is ${result.getAge} and gender is ${gender}and Address is ${address}`;
        callback(null, detail);
    }],

}, function (err, results) {
    if(results){
        console.log(results);
    }else{
        console.log(error);
    }

});
