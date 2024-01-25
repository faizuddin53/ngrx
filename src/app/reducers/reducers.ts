import { ActionReducerMap } from '@ngrx/store';
import { userReducer } from './user.reducer';
import { AppState } from './app.states';
import { articleReducer } from './article.reducer';

export const reducers: ActionReducerMap<AppState> = {
  artical: articleReducer,
  user: userReducer
};
