import { HeaderBarComponent } from './Components/header-bar/header-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material';
@NgModule({
  declarations: [AppComponent, HeaderBarComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
