import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotPasswordCpmponent } from './forgotpassword.component';

describe('ForgotpasswordComponent', () => {
  let component: ForgotPasswordCpmponent;
  let fixture: ComponentFixture<ForgotPasswordCpmponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordCpmponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgotPasswordCpmponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
