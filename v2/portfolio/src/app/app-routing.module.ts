import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { FeaturedComponent } from './featured/featured.component';
import { FindMeComponent } from './find-me/find-me.component';
import { HomeComponent } from './home/home.component';
// import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'experience', component: ExperienceComponent },
  { path: 'featured', component: FeaturedComponent },
  { path: 'find-me', component: FindMeComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  // providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
