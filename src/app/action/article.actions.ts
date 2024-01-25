import { createAction, props } from '@ngrx/store';
import { Article } from '../models/article';

export const JavaArticlesAction = createAction('[ Article ] Java');
export const AngularArticlesAction = createAction('[ Article ] Angular');
export const FavoriteArticlesAction = createAction('[ Article ] Favorite_Articles', props<{ payload: Article[] }>());
