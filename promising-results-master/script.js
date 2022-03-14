slowMath.add((a = 6), (b = 2))
.then((value1) => {
  console.log(value1);
});
slowMath.multiply((a = 8), (b = 2))
.then((value2) => {
  setTimeout(() => {
    console.log(value2);
    }, 1000);
});
slowMath.divide((a = 16), (b = 4))
.then((value3) => {
  setTimeout(() => {
    console.log(value3);
    }, 2000);
});
slowMath.subtract((a = 4), (b = 3))
.then((value4) => {
  setTimeout(() => {
    console.log(value4);
    }, 3000);
});
slowMath.add((a = 1), (b = 98))
.then((value5) => {
  setTimeout(() => {
    console.log(value5);
    }, 4000);
});
slowMath.remainder((a = 99), (b = 2))
.then((value6) => {
  setTimeout(() => {
    console.log(value6);
    }, 5000);
});
slowMath.multiply((a = 1), (b = 50))
.then((value7) => {
  setTimeout(() => {
    console.log(value7);
    }, 6000);
});
slowMath.remainder((a = 50), (b = 40))
.then((value8) => {
  setTimeout(() => {
    console.log(value8);
    }, 7000);
});
slowMath.add((a = 10), (b = 32))
.then((value9) => {
  setTimeout(() => {
    console.log(value9);
    }, 8000);
});

setTimeout(() => {
console.log("The final result is 42");
}, 10000);

