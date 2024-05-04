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
getData()
  .then((res) => console.log(res))
  .catch((e) => console.error(e));

// Try catch block
async function getResultFromTryCatch() {
  try {
    const res = await getData();
    console.log(res);
  } catch (e: unknown) {
    if (e as Error) {
      const err = e as Error;
      console.error(err.message);
    } else {
      console.error("Unknown error occured: ", e);
    }
  }
}
getResultFromTryCatch();
