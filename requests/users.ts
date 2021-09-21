import axios from './axios';
import UserModel from '../models/UserModel';

type ApiResponse = { results: ApiUser[]; info: unknown };

interface ApiUser {
  gender: 'male' | 'female';
  name: {
    title: string;
    first: string;
    last: string;
  };
  location: {
    street: string;
    city: string;
    state: string;
    postcode: string;
  };
  email: string;
  phone: string;
  cell: string;
  login: {
    uuid: string;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
}

const mapApiUserToUserModel = ({
  gender,
  name,
  location,
  email,
  phone,
  picture,
  login,
}: ApiUser): UserModel => {
  return {
    id: login.uuid,
    address: `${location.city}, ${location.state}`,
    email,
    gender,
    name: `${name.first} ${name.last}`,
    phone,
    picture,
  };
};
export const getUsers = async (): Promise<UserModel[]> => {
  const response = await axios.get<ApiResponse>(`/?results=20`);
  return response.data.results.map(mapApiUserToUserModel);
};
