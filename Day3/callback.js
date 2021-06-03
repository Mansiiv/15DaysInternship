//function
function greet(name,callback){
    console.log("Hello" + ' ' + name);
    callback();
}

//callback function

function callMe(){
    console.log("I am callback function");
}
//passing function as argument
greet('Mansi',callMe);