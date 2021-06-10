import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { KnowMeComponent } from './know-me.component';

describe('KnowMeComponent', () => {
  let component: KnowMeComponent;
  let fixture: ComponentFixture<KnowMeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
