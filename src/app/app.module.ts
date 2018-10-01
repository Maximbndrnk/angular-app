import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutes } from './app.routes';
import { MainModule } from './main/main.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutes,
    MainModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
