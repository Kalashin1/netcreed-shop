import { DocumentData } from './node_modules/@firebase/firestore-types/index.d';
export interface User extends DocumentData {
  fullName: string;
  phoneNumber: string;
  id: string;
}