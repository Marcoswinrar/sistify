import { Follower } from './follower';

export class User {
  id: string;
  display_name: string;
  country: string;
  email: string;
  followers: Follower
}
