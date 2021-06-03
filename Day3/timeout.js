function greet(name){
    console.log("Hello" + ' ' + name);
}

function wait(){
    console.log('I will wait for few milliseconds');
}

// calling the function
setTimeout(wait,2000);
greet('Mansi');

