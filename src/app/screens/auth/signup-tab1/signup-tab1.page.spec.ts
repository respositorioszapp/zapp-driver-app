import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupTab1Page } from './signup-tab1.page';

describe('SignupTab1Page', () => {
  let component: SignupTab1Page;
  let fixture: ComponentFixture<SignupTab1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupTab1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupTab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
