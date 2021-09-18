import { User } from './auth';

export type Category = {
  id: number;
  name: string;
  color: string;
  isActive: boolean;
  user: User;
};
