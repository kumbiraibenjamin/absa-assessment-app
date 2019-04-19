import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithdrawalPageComponent } from './withdrawal-page.component';

describe('WithdrawalPageComponent', () => {
  let component: WithdrawalPageComponent;
  let fixture: ComponentFixture<WithdrawalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithdrawalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithdrawalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
