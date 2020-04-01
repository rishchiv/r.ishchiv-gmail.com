import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { DeviceDetectorModule, DeviceDetectorService } from 'ngx-device-detector';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ToastsComponent } from './toasts/toasts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SidebarComponent,
    ToastsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DeviceDetectorModule.forRoot()
  ],
  providers: [DeviceDetectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
