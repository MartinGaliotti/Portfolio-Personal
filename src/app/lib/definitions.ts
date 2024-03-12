export type Id = `${string}-${string}-${string}-${string}-${string}`;

export type Address = {
  id: Id;
  country: string | null;
  state: string | null;
  city: string | null;
  street: string | null;
  number: number | null;
  zipcode: number | null;
};

export type ContactInfo = {
  id: Id;
  type: string;
  url: string;
  UserId: Id;
};

export type User = {
  id: Id;
  name: string;
  surname: string;
  description: string | null;
  birthdate: string | null;
  image: string | null;
  AddressId: Id;
  Address: Address;
  ContactInfos: ContactInfo[];
};

export type Experience = {
  id: Id;
  job: string;
  companyName: string;
  description: string;
  startDate: string;
  finishDate: string | null;
  AddressId: Id;
};

export type Technology = {
  id: Id;
  name: string;
  image: string;
};

export type Skill = {
  id: Id;
  name: string;
  image: string;
};

export type Education = {
  id: Id;
  title: string;
  description: string;
  startDate: string;
  finishDate: string | null;
  AddressId: Id;
};
