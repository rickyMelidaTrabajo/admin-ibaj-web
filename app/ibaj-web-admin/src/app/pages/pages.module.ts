import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from "./about/about.component";
import { ActivitiesComponent } from "./activities/activities.component";
import { ArticlesComponent } from "./articles/articles.component";
import { CounselingComponent } from "./counseling/counseling.component";
import { CoverPageComponent } from "./cover-page/cover-page.component";
import { PrayerComponent } from "./prayer/prayer.component";
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from '../components/home/home.module';
import { AppRoutingModule } from '../app.routing';
import { CoverPageModule } from '../components/cover-page/cover-page.module';
import { AboutModule } from '../components/about/about.module';
import { ActivitiesModule } from '../components/activities/activities.module';

@NgModule({
  declarations: [
    AboutComponent,
    ActivitiesComponent,
    ArticlesComponent,
    CounselingComponent,
    CoverPageComponent,
    PrayerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,
    CoverPageModule,
    AboutModule,
    ActivitiesModule
  ],
  exports: [
    AboutComponent,
    ActivitiesComponent,
    ArticlesComponent,
    CounselingComponent,
    CoverPageComponent,
    PrayerComponent,
    HomeComponent
  ]
})
export class PagesModule { }
