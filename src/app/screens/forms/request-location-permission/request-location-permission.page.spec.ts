import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RequestLocationPermissionPage } from './request-location-permission.page';

describe('RequestLocationPermissionPage', () => {
  let component: RequestLocationPermissionPage;
  let fixture: ComponentFixture<RequestLocationPermissionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestLocationPermissionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RequestLocationPermissionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
