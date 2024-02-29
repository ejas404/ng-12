import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatListsComponent } from './seat-lists.component';

describe('SeatListsComponent', () => {
  let component: SeatListsComponent;
  let fixture: ComponentFixture<SeatListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeatListsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SeatListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
