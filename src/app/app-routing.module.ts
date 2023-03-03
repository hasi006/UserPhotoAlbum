import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { UserComponent } from './user/user.component';

/*Routing Paths*/
const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'albums/:id', component: AlbumsComponent },
  { path: 'photos/:id/:albumid', component: PhotosComponent },
  { path: '**', component: UserComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
