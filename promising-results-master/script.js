slowMath.add((a = 6), (b = 2))
.then((value1) => {
    console.log(value1);
    value1 = slowMath.add((a = 6), (b = 2));
});
slowMath.multiply((a = 8), (b = 2))
.then((value2) => {
  console.log(value2);
  return slowMath.multiply((a = 8), (b = 2));
});
// slowMath.divide((a = 16), (b = 4))
// .then((value3) => {
//   console.log(value3);
//   return slowMath.divide((a = 16), (b = 4));
// });
// slowMath.subtract((a = 4), (b = 3))
// .then((value4) => {
//   console.log(value4);
//   return slowMath.subtract((a = 4), (b = 3));
// });
// slowMath.add((a = 1), (b = 98))
// .then((value5) => {
//   console.log(value5);
//   return slowMath.add((a = 1), (b = 98));
// });
// slowMath.remainder((a = 99), (b = 2))
// .then((value6) => {
//   console.log(value6);
//   return slowMath.remainder((a = 99), (b = 2));
// });
// slowMath.multiply((a = 1), (b = 50))
// .then((value7) => {
//   console.log(value7);
//   return slowMath.multiply((a = 1), (b = 50));
// });
// slowMath.remainder((a = 50), (b = 40))
// .then((value8) => {
//   console.log(value8);
//   return slowMath.remainder((a = 50), (b = 40));
// });
// slowMath.add((a = 10), (b = 32))
// .then((value9) => {
//   console.log(value9);
//   return slowMath.add((a = 10), (b = 32));
// });


const timing = () => {
console.log(value1)

  setTimeout(() => {
      console.log(value2);

      setTimeout(() => {
          console.log(value3);

          setTimeout(() => {
              console.log(value4);

              setTimeout(() => {
                console.log(value5);

                setTimeout(() => {
                  console.log(value6);

                  setTimeout(() => {
                    console.log(value7);

                    setTimeout(() => {
                      console.log(value8);

                      setTimeout(() => {
                        console.log(value9);

                    }, 2000);
                  }, 2000);
                }, 2000);
              }, 2000);
            }, 2000);
          }, 2000);
      }, 2000);
  }, 2000);
}

timing();