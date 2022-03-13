slowMath.add(a=6, b=2).then((value) => {
    return slowMath.add(value);
});
// }).then((nextValue) => {
  
//     return asyncThing3();
// }).catch((err) => {
  
//     return asyncRecovery1(err);
// }).then(() => {
   
//     return asyncThing4();
// }, (err) => {
 
//     return asyncRecovery2();
// }).catch((err) => {
  
//     console.log("Don't worry about it");
// }).then(() => {
  
//     console.log('All done!');
// });