import { Users } from './../models/user_api';
import axios from 'axios'
//DashBoard
export const fetchUsersServices = async (): Promise<Users[]> => {
	const response = await axios.get('https://jsonplaceholder.typicode.com/users');
	return response.data;
};
