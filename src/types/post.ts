import { Reactions } from "./reactions";

export class Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  date: string;
  reactions?: Reactions;
}