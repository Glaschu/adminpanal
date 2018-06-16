import { HeaderBarComponent } from './Components/header-bar/header-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { MatIconModule, MatButtonModule, MatSidenavModule,
 MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { MyNavComponent } from './Components/my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MyDashboardComponent } from './Components/my-dashboard/my-dashboard.component';
@NgModule({
  declarations: [AppComponent, HeaderBarComponent, MyNavComponent, MyDashboardComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
