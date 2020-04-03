export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  company: {
    name: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
  };
  phone: string;
}