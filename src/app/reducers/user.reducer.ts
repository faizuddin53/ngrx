import { createReducer, on } from '@ngrx/store';
import { addUser, editUser, removeUser } from '../action/user.actions';
import { UserState } from './app.states';


export const initialState: UserState = { users: []};
export const userReducer = createReducer(
  initialState,
  on(addUser, (state, { name }) => {
    const newUser = { id: Date.now(), name };
    return { users: [...state.users, newUser] };
  }),
  on(editUser, (state, { id, name }) => {
    return {
      users: state.users.map(user =>
        user.id === id ? { ...user, name } : user
      ),
    };
  }),
  on(removeUser, (state, { id }) => {
    return {
      users: state.users.filter(user => user.id !== id),
    };
  })
);
