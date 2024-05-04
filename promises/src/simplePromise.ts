type Person = {
  name: string;
  age: number;
};

const data: Person[] = [
  { name: "Ralph", age: 4 },
  { name: "Ephi", age: 10 },
];

function getResult(): Promise<Person[]> {
  return new Promise((resolve, reject) => {
    const number = Math.round(Math.random());
    number === 0 ? resolve(data) : reject(Error("Failed to fetch data"));
  });
}
async function getData() {
  return await getResult();
}

// Promise chaining
console.log("Running first promise...");
getData()
  .then((res) => {
    console.log("First Promise response: ", res);
  })
  .catch((e) => console.error("First Promise response: ", e));

// Try catch block
async function getResultFromTryCatch() {
  console.log("Running second promise...");
  try {
    const res = await getData();
    console.log("Second Promise response: ", res);
  } catch (e: unknown) {
    if (e as Error) {
      const err = e as Error;
      console.error("Second Pomise response: ", err);
    } else {
      console.error("Unknown error occured: ", e);
    }
  }
}

// Run the
getResultFromTryCatch();

// Run tsc && node dist/simplePromise.js
