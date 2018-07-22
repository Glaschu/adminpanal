import { HeaderBarComponent } from './Components/header-bar/header-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { MatIconModule, MatButtonModule, MatSidenavModule,
 MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatCheckboxModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSlideToggleModule, MatTreeModule, MatTooltipModule, MatTabsModule, MatStepperModule, MatSortModule, MatTableModule, MatSnackBarModule, MatSliderModule, MatDividerModule, MatDialogModule, MatDatepickerModule, MatChipsModule, MatButtonToggleModule, MatBottomSheetModule, MatBadgeModule, MatAutocompleteModule } from '@angular/material';
import { MyNavComponent } from './Components/my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MyDashboardComponent } from './Components/my-dashboard/my-dashboard.component';
import { UserpageComponent } from './Components/userpage/userpage.component';
import { GameSelectorComponent } from './Components/game-selector/game-selector.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatInputModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { ContentLayoutComponent } from './Components/content-layer/content-layer.component';
import { GameManagerComponent } from './Components/Game-Manager/Game-Manager.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    MyNavComponent,
    MyDashboardComponent,
    GameSelectorComponent,
    UserpageComponent,
    ContentLayoutComponent,
    GameManagerComponent
  ],
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
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,

    RouterModule.forRoot([
      {
        path: "",
        component: MyNavComponent,
        children: [
          {
            path: "",
            pathMatch: "full",
            component: MyDashboardComponent
          },
          {
            path: "game",
            pathMatch: "full",
            component: GameManagerComponent
          }
        ]
      }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
