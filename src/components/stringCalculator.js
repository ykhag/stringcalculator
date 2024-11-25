export function add(numbers) {
  // Handle empty string
  if (!numbers) return 0;

  let delimiter = /[,/\\n/;]/g; // Default delimiters: comma or newline

  // Check for custom delimiter
  if (numbers.startsWith("//")) {
    const match = numbers.match(/^\/\/(.+)\n/g); // Match //delimiter\n
    if (match) {
      delimiter = new RegExp(match[1]); // Use the custom delimiter
      numbers = numbers.slice(match[0].length); // Remove the delimiter declaration
    }
  }

  // Split numbers using the delimiter
  const nums = numbers.split(delimiter).map((num) => parseInt(num, 10));
  console.log(nums);

  // Handle invalid or NaN values
  const validNums = nums.filter((num) => !isNaN(num));

  // Check for negative numbers and throw an exception if found
  const negatives = validNums.filter((num) => num < 0);
  if (negatives.length > 0) {
    throw new Error(
      `!! Negative numbers not allowed: ${negatives.join(",")} !!`
    );
  }

  // Sum up all valid numbers
  return validNums.reduce((sum, num) => sum + num, 0);
}
