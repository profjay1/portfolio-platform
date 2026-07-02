import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyPill } from './technology-pill';

describe('TechnologyPill', () => {
  let component: TechnologyPill;
  let fixture: ComponentFixture<TechnologyPill>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyPill],
    }).compileComponents();

    fixture = TestBed.createComponent(TechnologyPill);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
