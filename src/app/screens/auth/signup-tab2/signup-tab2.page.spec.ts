import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignupTab2Page } from './signup-tab2.page';

describe('SignupTab2Page', () => {
  let component: SignupTab2Page;
  let fixture: ComponentFixture<SignupTab2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupTab2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignupTab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
