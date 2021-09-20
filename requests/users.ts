import axios from './axios';
import UserModel from '../models/UserModel';

type ApiResponse = { results: UserModel[]; info: unknown };

export const getUsers = async (): Promise<UserModel[]> => {
  const response = await axios.get<{ results: UserModel[]; info: unknown }>(
    `/?results=20`
  );
  return response.data.results;
};
