"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.makeSound = function () {
        console.log("".concat(this.name, " says woof woof"));
    };
    return Dog;
}());
exports.Dog = Dog;
