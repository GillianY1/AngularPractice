import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EletmentsHomeComponent } from './eletments-home.component';

describe('EletmentsHomeComponent', () => {
  let component: EletmentsHomeComponent;
  let fixture: ComponentFixture<EletmentsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EletmentsHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EletmentsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
