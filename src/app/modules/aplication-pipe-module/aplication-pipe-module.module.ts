import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DateLocalPipe} from '../../pipes/date-local.pipe'
import { WrapNamePipe } from 'src/app/pipes/wrap-name.pipe';

@NgModule({
  declarations: [DateLocalPipe, WrapNamePipe],
  imports: [
    CommonModule
  ],
  exports : [
    DateLocalPipe, WrapNamePipe
  ]
})
export class AplicationPipeModuleModule { }
