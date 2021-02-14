import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageListerComponent } from './image-lister.component';

describe('ImageListerComponent', () => {
  let component: ImageListerComponent;
  let fixture: ComponentFixture<ImageListerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageListerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageListerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
