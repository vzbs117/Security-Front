import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatorUrlComponent } from './validator-url.component';

describe('ValidatorUrlComponent', () => {
  let component: ValidatorUrlComponent;
  let fixture: ComponentFixture<ValidatorUrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValidatorUrlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidatorUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
