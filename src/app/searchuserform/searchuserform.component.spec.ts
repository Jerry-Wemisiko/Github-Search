import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchuserformComponent } from './searchuserform.component';

describe('SearchuserformComponent', () => {
  let component: SearchuserformComponent;
  let fixture: ComponentFixture<SearchuserformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchuserformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchuserformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
