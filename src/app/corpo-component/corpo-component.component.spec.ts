import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpoComponentComponent } from './corpo-component.component';

describe('CorpoComponentComponent', () => {
  let component: CorpoComponentComponent;
  let fixture: ComponentFixture<CorpoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorpoComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorpoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
