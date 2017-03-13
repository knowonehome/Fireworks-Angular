import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FireworkRestAppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { FireworksComponent } from './fireworks/fireworks.component';
import { HomeComponent } from './home/home.component';

import { FireworksService } from './shared/fireworks.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FireworksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FireworkRestAppRoutingModule
  ],
  providers: [
    FireworksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
