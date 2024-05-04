"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const data = [
    { name: "Ralph", age: 4 },
    { name: "Ephi", age: 10 },
];
function getResult() {
    return new Promise((resolve, reject) => {
        const number = Math.round(Math.random());
        number === 0 ? resolve(data) : reject(Error("Failed to fetch data"));
    });
}
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield getResult();
    });
}
// Promise chaining
getData()
    .then((res) => console.log(res))
    .catch((e) => console.error(e));
// Try catch block
function getResultFromTryCatch() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const res = yield getData();
            console.log(res);
        }
        catch (e) {
            if (e) {
                const err = e;
                console.error(err.message);
            }
            else {
                console.error("Unknown error occured: ", e);
            }
        }
    });
}
getResultFromTryCatch();
