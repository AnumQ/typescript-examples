import { Cat } from "./classes/Cat";
import { Dog } from "./classes/Dog";

const cat = new Cat("Cinnamon");
cat.makeSound();

const dog = new Dog("Jerry");
dog.makeSound();
// Run tsc index.ts && node index.js
