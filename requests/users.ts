import axios from './axios';
import UserModel from '../models/UserModel';


export const getUsers = async (): Promise<UserModel[]> => {
  const response = await axios.get<UserModel[]>(`/`);
  return response.data;
}
