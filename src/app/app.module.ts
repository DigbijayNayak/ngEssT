import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { categoryListPipe } from './category-list.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { lookupLists, lookupListToken } from './providers';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import { MockXHRBackend } from './mock-xhr-backend';
// import { routing } from './app.routing';
// import { NewItemModule } from './media-item-form/new-item.module';

// const lookupLists = {
//   mediums: ['Movies', 'Series'],
// };
@NgModule({
  declarations: [
    AppComponent,
    FavoriteDirective,
    MediaItemComponent,
    MediaItemListComponent,
    categoryListPipe,
    // MediaItemFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // ReactiveFormsModule,
    HttpClientModule,
    // routing,
    // NewItemModule,
  ],
  // providers: [{ provide: 'lookupListToken', useValue: lookupLists }],
  providers: [
    { provide: lookupListToken, useValue: lookupLists },
    { provide: HttpXhrBackend, useClass: MockXHRBackend },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
