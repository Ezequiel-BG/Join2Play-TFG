import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LolformComponent } from './lolform.component';

describe('LolformComponent', () => {
  let component: LolformComponent;
  let fixture: ComponentFixture<LolformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LolformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LolformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
