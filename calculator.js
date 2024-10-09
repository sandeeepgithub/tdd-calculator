const calculator = (nums) => {
  if (!nums) {
    return 0;
  }

  nums = nums.trim();

  if (nums.startsWith("//")) {
    const sliceStartIndex = nums.indexOf("\n");
    const delimiter = nums.slice(2, sliceStartIndex);
    let numbers = nums.slice(sliceStartIndex + 1);
    numbers = numbers.replaceAll(delimiter, ",");

    nums = numbers;
  }

  if (nums.includes("\n")) {
    let numbers = nums.replaceAll("\n", ",");
    nums = numbers;
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
console.log(calculator("1\n2\n3\n4"));
console.log(calculator("//;\n1;2;3;4;5;"));
console.log(calculator("//^\n9^8^7"));
console.log(calculator("//^\n6^5^"));

module.exports = calculator;
