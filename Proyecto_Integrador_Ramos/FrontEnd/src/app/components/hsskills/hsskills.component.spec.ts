import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HSSkillsComponent } from './hsskills.component';

describe('HSSkillsComponent', () => {
  let component: HSSkillsComponent;
  let fixture: ComponentFixture<HSSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HSSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HSSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
