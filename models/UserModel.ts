export default interface UserModel {
  gender: 'male' | 'female';
  name: string;
  address: string;
  email: string;
  phone: string;
  id: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}
