import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { AlwaysScrollComponent } from './always-scroll.component';

describe('AlwaysScrollComponent', () => {
  let component: AlwaysScrollComponent;
  let fixture: ComponentFixture<AlwaysScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AlwaysScrollComponent, NoopAnimationsModule, FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlwaysScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
