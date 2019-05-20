import { Tracks } from '../track/tracks';

export class Playlist {

  id: string;
  href: string;
  name: string;
  description: string;
  public: boolean;
  images: any;
  tracks: Tracks;
}
