const calculator = (nums) => {
  if (!nums) {
    return 0;
  }

  let total = 0;

  const list = nums.split(",").map((el) => Math.round(el));

  list.forEach((num) => {
    total = total + num;
  });

  return total;
};

console.log(calculator(0));
console.log(calculator("2,3,4,5"));
console.log(calculator("2,3.3,4.1,5.2"));
console.log(calculator("2,3,4.6,5.8"));
console.log(calculator("2,3,4,5    "));

module.exports = calculator;
