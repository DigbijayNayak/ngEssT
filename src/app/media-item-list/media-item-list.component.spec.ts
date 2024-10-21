import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaItemListComponent } from './media-item-list.component';

describe('MediaItemListComponent', () => {
  let component: MediaItemListComponent;
  let fixture: ComponentFixture<MediaItemListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaItemListComponent]
    });
    fixture = TestBed.createComponent(MediaItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
