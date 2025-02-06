import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { StickyHeaderComponent } from './sticky-header.component';

describe('StickyHeaderComponent', () => {
  let component: StickyHeaderComponent;
  let fixture: ComponentFixture<StickyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ StickyHeaderComponent, NoopAnimationsModule, FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StickyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
