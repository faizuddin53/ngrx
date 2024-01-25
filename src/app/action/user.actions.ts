import { createAction, props } from '@ngrx/store';

export const addUser = createAction('[User] Add User', props<{ name: string }>());
export const editUser = createAction('[User] Edit User', props<{ id: number; name: string }>());
export const removeUser = createAction('[User] Remove User', props<{ id: number }>());
