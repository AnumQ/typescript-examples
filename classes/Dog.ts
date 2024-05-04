import { IAnimal } from "../interfaces/IAnimal";

export class Dog implements IAnimal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  makeSound(): void {
    console.log(`${this.name} says woof woof`);
  }
}
