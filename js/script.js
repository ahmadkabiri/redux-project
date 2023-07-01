// function sum (a,b) {
//   return a + b ;
// }

function sum(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(sum(12)(8)(10));

// N  => 1

// const sum1 = (a, b, c) => {
//   return (b) => {
//     return (c) => {
//       return a+b+c
//     };
//   };
// };

const sum1 = (a) => (b) => (c) => a + b + c;
console.log(sum1(12)(8)(10));
