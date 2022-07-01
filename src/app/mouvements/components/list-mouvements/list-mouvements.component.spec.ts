import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMouvementsComponent } from './list-mouvements.component';

describe('ListMouvementsComponent', () => {
  let component: ListMouvementsComponent;
  let fixture: ComponentFixture<ListMouvementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMouvementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMouvementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
