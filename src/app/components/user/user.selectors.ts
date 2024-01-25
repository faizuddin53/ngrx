import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../../reducers/app.states';


export const selectUserState = createFeatureSelector<UserState>('user');

export const selectUsers = createSelector(selectUserState, (state) => state.users);
