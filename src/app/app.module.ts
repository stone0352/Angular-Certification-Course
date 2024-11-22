// Module based approach is not recommended anymore, bc it creates an extra file and import is convienent.. but this is still seen 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
    declarations: [ AppComponent, HeaderComponent, UserComponent ],
    bootstrap: [AppComponent],
    imports:  [ BrowserModule, SharedModule, TasksModule ]
})

export class AppModule {}




// // Module based approach is not recommended anymore, bc it creates an extra file and import is convienent.. but this is still seen 
// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

// import {AppComponent} from './app.component';
// import { HeaderComponent } from './header/header.component';
// import { UserComponent } from './user/user.component';
// import { TasksComponent } from './tasks/tasks.component';
// import { CardComponent } from './shared/card/card.component';
// import { TaskComponent } from './tasks/task/task.component';
// import { NewTaskComponent } from './tasks/new-task/new-task.component';

// @NgModule({
//     declarations: [ AppComponent, HeaderComponent, UserComponent, CardComponent, TasksComponent, TaskComponent, NewTaskComponent ],
//     bootstrap: [AppComponent],
//     imports:  [ BrowserModule, FormsModule]
// })

// export class AppModule {}