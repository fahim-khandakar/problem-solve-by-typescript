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

class Vehicle {
  private make: string;
  year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;
  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }
  getModel() {
    return `Model: ${this.model}`;
  }
}

// const myCar = new Car("Toyota", 2020, "Corolla");
// console.log(myCar.getInfo());
// console.log(myCar.getModel());

const processValue = (value: string | number): number => {
  if (typeof value === "string") {
    return value.length; // Return the length of the string
  } else {
    return value * 2; // Return the number itself
  }
};

// console.log(processValue("hello"));
// console.log(processValue(10));
