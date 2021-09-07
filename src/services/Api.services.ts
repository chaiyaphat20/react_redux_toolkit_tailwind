import axios from 'axios';

import { Ldap } from '../models/login/ldap';
import { Org } from '../models/login/org';
import { FromLogin } from '../models/login/formLogin';
import { Users } from './../models/user_api';
import { IsSuccessLogin } from '../models/login/isSuccessLogin';

//DashBoard
export const fetchUsersServices = async (): Promise<Users[]> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
};

export const fetchDataLdap = async (): Promise<Ldap> => {
  const response = await axios.get(`https://wservice.cpf.co.th/Food/Food_Authen_Center/AuthenService.svc/GetLDAPConfigByAppCode/OMS_SMARTFAC`);
  return response.data;
};

export const fetchDataOrg = async (props: string): Promise<Org> => {
  const response = await axios.get(`https://wservice.cpf.co.th/Food/Food_Authen_Center/AuthenService.svc/GetOrganizationListByCountry/OMS_SMARTFAC/${props}`);
  return response.data;
};

export const fetchLogin = async (props: FromLogin): Promise<IsSuccessLogin> => {
  const { AuthenMode, LDAPServer, Password, UserId } = props;
  const response = await axios.post('https://wservice.cpf.co.th/Food/Food_Authen_Center/AuthenService.svc/GetAuthen', {
    UserId,
    Password,
    AuthenMode,
    LDAPServer,
  });
  return response.data;
};
