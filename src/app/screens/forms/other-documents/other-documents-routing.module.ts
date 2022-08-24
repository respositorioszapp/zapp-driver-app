import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherDocumentsPage } from './other-documents.page';

const routes: Routes = [
  {
    path: '',
    component: OtherDocumentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherDocumentsPageRoutingModule {}
