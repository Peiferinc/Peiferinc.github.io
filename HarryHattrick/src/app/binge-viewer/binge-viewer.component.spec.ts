import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BingeViewerComponent } from './binge-viewer.component';

describe('BingeViewerComponent', () => {
  let component: BingeViewerComponent;
  let fixture: ComponentFixture<BingeViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BingeViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BingeViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
