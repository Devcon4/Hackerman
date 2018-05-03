import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostProccessComponent } from './post-proccess.component';

describe('PostProccessComponent', () => {
  let component: PostProccessComponent;
  let fixture: ComponentFixture<PostProccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostProccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostProccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
