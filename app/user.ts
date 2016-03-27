import {Address} from './address';

export interface User {
  name: string;
  email: string;
  phone?: string;
  address?: Address;
}