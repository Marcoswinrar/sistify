import { User } from '../user';

export class Playlist {

  id: string;
  href: string;
  name: string;
  description: string;
  public: boolean;
  images: any;
  tracks: any;
  owner: User;

}
