import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UsersComponent } from './users.component';


const routes: Routes = [
  {
    path:'',component:UsersComponent,
    children:[
      {
        path:'',redirectTo:'users',pathMatch:'full'
      },
      {
        path:'users',component:UserListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
