"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cat_1 = require("./classes/Cat");
var Dog_1 = require("./classes/Dog");
var cat = new Cat_1.Cat("Cinnamon");
cat.makeSound();
var dog = new Dog_1.Dog("Jerry");
dog.makeSound();
// Run tsc index.ts && node index.js
