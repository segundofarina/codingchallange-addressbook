
export default interface UserModel {
  gender: "male" |"female";
  name: {
    title: string;
    first: string;
    last: string;
  },
  location: {
    street: string;
    city: string;
    state: string;
    postcode: string;
  },
  email: "brad.gibson@example.com";
  phone: string,
  cell: string,
  id: {
    name: string,
    value: string
  },
  picture: {
    large: string,
    medium: string,
    thumbnail: string
  },
}
 

