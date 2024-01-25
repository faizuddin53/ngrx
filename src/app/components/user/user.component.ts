import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { addUser, editUser, removeUser } from '../../action/user.actions';
import { User } from '../../models/user';
import { selectUsers } from './user.selectors';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  newUser = '';
  users$: Observable<User[]> | undefined;

  constructor(private store: Store) {
    this.users$= store.select(selectUsers);
  }



  addUser() {
    if (this.newUser.trim() !== '') {
      this.store.dispatch(addUser({ name: this.newUser}));
      this.newUser = '';
    }
  }

  editUser(id: number) {
    const newName = prompt('Enter new name:');
    if (newName !== null) {
      this.store.dispatch(editUser({ id, name: newName }));
    }
  }

  removeUser(id: number) {
    if (confirm('Are you sure you want to remove this user?')) {
      this.store.dispatch(removeUser({ id }));
    }
  }
}
