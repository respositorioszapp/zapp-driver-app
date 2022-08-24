import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LiquidationPage } from './liquidation.page';

describe('LiquidationPage', () => {
  let component: LiquidationPage;
  let fixture: ComponentFixture<LiquidationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiquidationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LiquidationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
