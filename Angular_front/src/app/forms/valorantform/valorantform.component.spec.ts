import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorantformComponent } from './valorantform.component';

describe('ValorantformComponent', () => {
  let component: ValorantformComponent;
  let fixture: ComponentFixture<ValorantformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValorantformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValorantformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
