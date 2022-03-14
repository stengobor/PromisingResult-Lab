//Promise Chaining

// slowMath.add((a = 6), (b = 2))
// .then((value1) => {
//   console.log(value1);
// });
// slowMath.multiply((a = 8), (b = 2))
// .then((value2) => {
//   setTimeout(() => {
//     console.log(value2);
//     }, 1000);
// });
// slowMath.divide((a = 16), (b = 4))
// .then((value3) => {
//   setTimeout(() => {
//     console.log(value3);
//     }, 2000);
// });
// slowMath.subtract((a = 4), (b = 3))
// .then((value4) => {
//   setTimeout(() => {
//     console.log(value4);
//     }, 3000);
// });
// slowMath.add((a = 1), (b = 98))
// .then((value5) => {
//   setTimeout(() => {
//     console.log(value5);
//     }, 4000);
// });
// slowMath.remainder((a = 99), (b = 2))
// .then((value6) => {
//   setTimeout(() => {
//     console.log(value6);
//     }, 5000);
// });
// slowMath.multiply((a = 1), (b = 50))
// .then((value7) => {
//   setTimeout(() => {
//     console.log(value7);
//     }, 6000);
// });
// slowMath.remainder((a = 50), (b = 40))
// .then((value8) => {
//   setTimeout(() => {
//     console.log(value8);
//     }, 7000);
// });
// slowMath.add((a = 10), (b = 32))
// .then((value9) => {
//   setTimeout(() => {
//     console.log(value9);
//     }, 8000);
// }).catch((err) => {
//   console.log(err);
// })

// setTimeout(() => {
// console.log("The final result is 42");
// }, 10000);

// Async/Await

async function doMath() {
  try {
    let val1 = await slowMath.add(6, 2);
    console.log(val1);
    try {
      let val2 = await slowMath.multiply(8, 2);
      console.log(val2);
    } catch (err) {
      console.log(err);
    }
    try {
      let val3 = await slowMath.remainder(16, 4);
      console.log(val3);
    } catch (err) {
      console.log(err);
    }
    try {
      let val4 = await slowMath.subtract(4, 3);
      console.log(val4);
    } catch (err) {
      console.log(err);
    }
    try {
      let val5 = await slowMath.add(1, 98);
      console.log(val5);
    } catch (err) {
      console.log(err);
    }
    try {
      let val6 = await slowMath.remainder(99, 2);
      console.log(val6);
    } catch (err) {
      console.log(err);
    }
    try {
      let val7 = await slowMath.multiply(1, 50);
      console.log(val7);
    } catch (err) {
      console.log(err);
    }
    try {
      let val8 = await slowMath.remainder(50, 40);
      console.log(val8);
    } catch (err) {
      console.log(err);
    }
    try {
      let val9 = await slowMath.add(10, 32);
      console.log(val9);
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
}

doMath();
