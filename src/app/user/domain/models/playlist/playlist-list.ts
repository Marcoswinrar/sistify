import { Playlist } from './playlist';

export class PlaylistList {
  href: string;
  items: Playlist[];
  limit: number;
  next: string;
  previous: string;
  total: number;
}
