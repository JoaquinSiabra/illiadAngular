import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CantoComponent } from './canto.component';

describe('CantoComponent', () => {
  let component: CantoComponent;
  let fixture: ComponentFixture<CantoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CantoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CantoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
