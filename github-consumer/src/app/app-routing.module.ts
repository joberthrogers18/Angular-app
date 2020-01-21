import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchUserComponent } from './search-user/search-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  { path: '', component: SearchUserComponent },
  { path: 'user-info', component: UserInfoComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
