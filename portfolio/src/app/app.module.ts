import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SnippetsComponent } from './components/snippets/snippets.component';
import { KnowMeComponent } from './components/know-me/know-me.component';
import { FindMeComponent } from './components/find-me/find-me.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './components/hello/hello.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SnippetsComponent,
    KnowMeComponent,
    FindMeComponent,
    NavigationComponent,
    FooterComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
