import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { FeaturedComponent } from './featured/featured.component';
import { FindMeComponent } from './find-me/find-me.component';
import { HomeComponent } from './home/home.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'featured', component: FeaturedComponent },
  { path: 'find-me', component: FindMeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'intro', component: IntroComponent },

];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
