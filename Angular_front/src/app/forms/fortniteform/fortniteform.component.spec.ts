import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FortniteformComponent } from './fortniteform.component';

describe('FortniteformComponent', () => {
  let component: FortniteformComponent;
  let fixture: ComponentFixture<FortniteformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FortniteformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FortniteformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
