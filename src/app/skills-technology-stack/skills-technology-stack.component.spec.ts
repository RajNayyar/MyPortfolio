import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsTechnologyStackComponent } from './skills-technology-stack.component';

describe('SkillsTechnologyStackComponent', () => {
  let component: SkillsTechnologyStackComponent;
  let fixture: ComponentFixture<SkillsTechnologyStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsTechnologyStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsTechnologyStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
