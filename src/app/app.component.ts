import { Component } from '@angular/core';
//import { NgFor, NgIf } from '@angular/common';

//import { HeaderComponent } from './header/header.component';       // removed with use of AppModule
//import { UserComponent } from "./user/user.component";              // removed with use of AppModule
import { DUMMY_USERS } from './dummy-users';
//import { TasksComponent } from './tasks/tasks.component';
//import { TaskComponent } from "./tasks/task/task.component";

@Component({
  selector: 'app-root',
  //standalone: true,      removed with use of AppModule and default is false
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  //imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf, TaskComponent]   // removed with use of AppModule
})

export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string){
    //console.log('Selected user with id ' + id)
    this.selectedUserId = id;
  }
}
