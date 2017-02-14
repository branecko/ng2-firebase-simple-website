import {Category} from './Category';

export interface Business {
  $key?: string;
  category?: Category;
  city?: string;
  company?: string;
  email?: string;
}
