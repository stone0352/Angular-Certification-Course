import { Component, Input, Output, EventEmitter} from '@angular/core';     //{Computed, input, Signal}  // if Signal add () to html file for functions

import { type User } from './user.model';
//import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
//  standalone: true,                               //   Set to default false when migrating componenet to Module 
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'                  
//  imports: [CardComponent]                        //   Set to default false when migrating componenet to Module 
})
export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter();
  
  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  
  onSelectUser() {
    this.select.emit(this.user.id);
  }
}




// import { Component, signal } from '@angular/core';

// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css'
// })
// export class UserComponent {
//   selectedUser = signal(DUMMY_USERS[randomIndex]);
//   //imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar)

   // Added in lesson 32: Alternate for signal, changes required in html file.... imagePath()
    //avatar = input.required<string>();
    //name = input.required<string>();

    // imagePath = computed(() => {
    //   return 'assets/users/' + this.avatar();
    // });

//   get imagePath() {
//     return 'assets/users/' + this.selectedUser.avatar
//   }

  
//   onSelectUser() {
//     console.log('Clicked!')!
    
//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser.set(DUMMY_USERS[randomIndex]);
//     //this.selectedUser = DUMMY_USERS[randomIndex];
//   }
// } 



//   Original code 
// import { Component } from '@angular/core';

// import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

// @Component({
//   selector: 'app-user',
//   standalone: true,
//   imports: [],
//   templateUrl: './user.component.html',
//   styleUrl: './user.component.css'
// })
// export class UserComponent {
//   selectedUser = DUMMY_USERS[randomIndex];

//   get imagePath() {
//     return 'assets/users/' + this.selectedUser.avatar
//   }

  
//   onSelectUser() {
//     //console.log('Clicked!')!

//     const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//     this.selectedUser = DUMMY_USERS[randomIndex];
//   }
// }



// ----------      User object
// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

//  ----------------Input of object required and Output of Event (select)
  //@Output() select = new EventEmitter<string>();
  // @Input({required: true}) id!:string; 
  // @Input({required: true}) avatar!: string;
  // @Input({required: true}) name!: string;