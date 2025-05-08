const formatString = (input: string, toUpper: boolean = true): string => {
  if (toUpper) {
    return input?.toUpperCase();
  }
  return input?.toLocaleLowerCase();
};

const filterByRating = (
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] => {
  return items?.filter((item) => item?.rating >= 4);
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
  return arrays.flat();
};

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

const processValue = (value: string | number): number => {
  if (typeof value === "string") {
    return value.length;
  } else {
    return value * 2;
  }
};

interface Product {
  name: string;
  price: number;
}

const getMostExpensiveProduct = (products: Product[]): Product | null => {
  if (products.length === 0) return null;
  return products.reduce((prev, curr) =>
    prev.price > curr.price ? prev : curr
  );
};

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const getDayType = (day: Day): string => {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  }
  return "Weekday";
};

const squareAsync = async (n: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) return reject(new Error("Negative number not allowed"));
      resolve(n * n);
    }, 1000);
  });
};
