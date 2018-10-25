import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VersoComponent } from './verso/verso.component';
import { PalabraComponent } from './palabra/palabra.component';
import { CantoComponent } from './canto/canto.component';
import { SelectorComponent } from './selector/selector.component';
import { ControlComponent } from './control/control.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTooltip} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    VersoComponent,
    PalabraComponent,
    CantoComponent,
    SelectorComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
