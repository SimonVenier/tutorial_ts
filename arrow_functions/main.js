var log = function (message) {
    console.log(message);
};
var doLog = function (message) { return console.log(message); }; //declare it in a faster was in typescript, it is called an arrow function
var doSome = function () { return console.log(); }; //it also can be empty
