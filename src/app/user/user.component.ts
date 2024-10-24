// @ts-ignore

import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';



// @ts-ignore
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  selectedUser = DUMMY_USERS[0];

  onSelectedUser(){
    const randomUser = () => DUMMY_USERS[Math.floor(Math.random() * DUMMY_USERS.length)];
    this.selectedUser = randomUser();
  }
}
