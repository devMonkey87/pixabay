import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSearcherComponent } from './image-searcher.component';

describe('ImageSearcherComponent', () => {
  let component: ImageSearcherComponent;
  let fixture: ComponentFixture<ImageSearcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageSearcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageSearcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
