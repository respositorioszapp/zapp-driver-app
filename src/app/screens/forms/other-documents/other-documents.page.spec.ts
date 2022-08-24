import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherDocumentsPage } from './other-documents.page';

describe('OtherDocumentsPage', () => {
  let component: OtherDocumentsPage;
  let fixture: ComponentFixture<OtherDocumentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherDocumentsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherDocumentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
