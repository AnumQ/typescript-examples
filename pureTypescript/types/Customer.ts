type Customer = {
  name: string;
  age: number;
};

type CustomerWithAddress = Customer & {
  address: Address;
};

type Address = {
  addressLine1: string;
  addressLine2: string;
  postalCode: string;
  city: string;
  country: string;
};

type CustomerWithEmail = Customer & {
  email: string;
};

// Define a type representing a customer with both address and email
type CustomerWithAddressAndEmail = CustomerWithAddress & CustomerWithEmail;

// Define a type representing a customer with either address or email
type CustomerWithAddressOrEmail = CustomerWithAddress | CustomerWithEmail;

// Example usage
const customerWithAddress: CustomerWithAddress = {
  name: "Alice",
  age: 30,
  address: {
    addressLine1: "123 Main St",
    addressLine2: "",
    postalCode: "234 DO2",
    city: "Oslo",
    country: "Norway",
  },
};

const customerWithEmail: CustomerWithEmail = {
  name: "Bob",
  age: 25,
  email: "bob@example.com",
};

const customerWithAddressAndEmail: CustomerWithAddressAndEmail = {
  name: "Charlie",
  age: 35,
  address: {
    addressLine1: "123 Main St",
    addressLine2: "",
    postalCode: "234 DO2",
    city: "Oslo",
    country: "Norway",
  },
  email: "charlie@example.com",
};

const customerWithAddressOrEmail: CustomerWithAddressOrEmail = {
  name: "David",
  age: 40,
  email: "charlie@example.com",
};
