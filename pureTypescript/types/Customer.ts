type Customer = {
  name: string;
  age: string;
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
