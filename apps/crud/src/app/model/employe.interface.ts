import { Document } from 'mongoose';

export interface Employee extends Document {
  id?: string;
  nama?: string;
  umur?: number;
  gender?: string;
  email?: string;
  jobtitle?: string;
}
