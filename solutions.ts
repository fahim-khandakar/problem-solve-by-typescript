const formatString = (input: string, toUpper: boolean = true): string => {
  if (toUpper) {
    return input?.toUpperCase();
  }
  return input?.toLocaleLowerCase();
};

// console.log(formatString("Hello World"));
// console.log(formatString("Hello World", false));
// console.log(formatString("Hello World", true));

const filterByRating = (
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] => {
  return items?.filter((item) => item?.rating >= 4); // Example: filter items with rating >= 4
};

// const books = [
//   { title: "Book A", rating: 3.5 },
//   { title: "Book B", rating: 3.2 },
//   { title: "Book C", rating: 3.0 },
// ];

// console.log(filterByRating(books));

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};

// console.log(concatenateArrays(["a", "b"], ["c"]));
// console.log(concatenateArrays([1, 2], [3, 4], [5]));
