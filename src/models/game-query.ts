import { Genre } from './genre';
import { Platform } from './platform';

export interface GameQuery {
  search: string;
  genre: Genre | null;
  platform: Platform | null;
  sortCategory: string;
}