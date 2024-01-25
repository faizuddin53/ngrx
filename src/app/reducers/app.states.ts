import { Article } from "../models/article";
import { User } from "../models/user";

export interface AppState {
	artical: ArticleState;
  user: UserState
}
export interface ArticleState {
	articles: Article[];
}

export interface UserState {
	users: User[];
}
