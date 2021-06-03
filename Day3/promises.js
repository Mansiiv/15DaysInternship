var promise = new Promise(function(resolve,reject){
const x = 100;
const y = 100;
if( x===y){
    resolve();
}
else{
    reject();
}
});

promise
    .then(function(){
        console.log('Success');
    })
    .catch(function(){
        console.log('Error');
    });
