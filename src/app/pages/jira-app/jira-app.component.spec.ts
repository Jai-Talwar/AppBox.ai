import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JiraAppComponent } from './jira-app.component';

describe('JiraAppComponent', () => {
  let component: JiraAppComponent;
  let fixture: ComponentFixture<JiraAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JiraAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JiraAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
