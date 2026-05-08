// Problem 1: Create a TypeScript function filterEvenNumbers that accepts an array of numbers and returns a new array containing only the even numbers.

const filterEvenNumbers = (numbers: number[]): number[] => {
  return numbers.filter((num) => num % 2 === 0);
};

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Problem 2: Write a function reverseString that takes a string as input and returns the reversed version of that string.

const reverseString = (input: string): string => {
  return input.split("").reverse().join("");
};

console.log(`"${reverseString("typescript")}"`);

// Problem 3: Define a union type StringOrNumber and create a function checkType that uses type guards to return "String" if the input is a string or "Number" if the input is a number.

type StringOrNumber = string | number;

const checkType = (input: StringOrNumber): string => {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
};

console.log(`"${checkType("Hello")}"`);
console.log(`"${checkType(42)}"`);

// Problem 4: Write a generic function getProperty that takes an object and a key, then returns the value of that key. Use constraints to ensure the key exists on the object.

const getProperty = <T, K extends keyof T>(object: T, key: K): T[K] => {
  return object[key];
};

const user = { id: 1, name: "John Doe", age: 21 };

console.log(`"${getProperty(user, "name")}"`);

// Problem 5:  Define an interface Book with properties title, author, and publishedYear. Create a function toggleReadStatus that accepts a Book object and returns a new object with an added isRead property (boolean), defaulting to true.

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (book: Book) => {
  return {
    ...book,
    isRead: true,
  };
};

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

console.log(toggleReadStatus(myBook));
const result = toggleReadStatus(myBook);
console.log(`{
  title: "${result.title}",
  author: "${result.author}",
  publishedYear: ${result.publishedYear},
  isRead: ${result.isRead}
}`);

// Problem 6: Create a class Person with a name and age. Then, create a subclass Student that adds a grade property. Include a method getDetails in the Student class that returns a string with the student's name, age, and grade.

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `"Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}"`;
  }
}
// Sample Input
const student = new Student("Alice", 20, "A");

console.log(student.getDetails());

// Problem 7: Create a function getIntersection that takes two arrays of numbers and returns a new array containing only the elements that are present in both arrays.

const getIntersection = (array1: number[], array2: number[]): number[] => {
  return array1.filter((num) => array2.includes(num));
};

// Sample Input
console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
