import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './users/user-add/user-add.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UsersProfilesComponent } from './users/users-profiles/users-profiles.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'admin/users/add', component: UserAddComponent },
  { path: 'admin/users/edit', component: UserEditComponent },
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/users/users-profiles', component: UsersProfilesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
