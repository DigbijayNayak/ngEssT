import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';

const routes: Routes = [
  // { path: 'add', component: MediaItemFormComponent },
  {
    path: 'add',
    loadChildren: () =>
      import('./media-item-form/new-item.module').then((m) => m.NewItemModule),
  },
  { path: ':medium', component: MediaItemListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'all' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
