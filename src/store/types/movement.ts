import { Category } from './category';
import { User } from './auth';

export type Movement = {
  id?: number;
  name: string;
  type: string;
  finished: boolean;
  value: number;
  installments: number;
  isActive: boolean;
  categories: Category[];
  user: User;
};
