import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {SliderModule} from 'primeng/slider';
import { AppRoutingModule, routerComponent } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HeaderComponent } from './header/header.component';
// import {SidebarModule} from 'primeng/sidebar';
import {InputTextModule} from 'primeng/inputtext';
import { RegistrationComponent } from './login-registration/registration.component';
// import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    // NavBarComponent,
    HeaderComponent,
    routerComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // SidebarModule,
    InputSwitchModule,
    // DropdownModule,
    InputTextModule,
    SliderModule,
    ButtonModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
