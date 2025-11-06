import { NgModule } from '@angular/core';


/**
 ** Modules - BEGIN
 */

import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonService } from '@services';

const MODULES = [CommonModule, NgbModule]

/**
 ** Modules - END
 */

import { SafeUrl } from 'app/shared/pipes';

@NgModule({
  declarations:[
    SafeUrl
  ],
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES,
    SafeUrl
  ],
  providers: [CommonService],
})
export class AppModule { }