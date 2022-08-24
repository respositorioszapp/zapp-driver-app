import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VehicleInformationPage } from './vehicle-information.page';

describe('VehicleInformationPage', () => {
  let component: VehicleInformationPage;
  let fixture: ComponentFixture<VehicleInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleInformationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VehicleInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
