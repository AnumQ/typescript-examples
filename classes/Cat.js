"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.makeSound = function () {
        console.log("".concat(this.name, " says mjau"));
    };
    return Cat;
}());
exports.Cat = Cat;
