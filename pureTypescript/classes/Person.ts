class Person {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  greet(text: string) {
    console.log(text);
  }
}

const person1 = new Person("Anum", 30);
person1.greet("Hello there");

// Run tsc Person.ts // This will generate Person.js file
// Run node Person.js // Prints "Hello there"
// Delete Person.js as this will cause double declaration issue.
// Typescript is just for tooling

const age = person1.getAge();
console.log(`Person is ${person1.getName()} with age ${age}`);
