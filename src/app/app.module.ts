import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {SliderModule} from 'primeng/slider';
import { AppRoutingModule, routerComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {InputTextModule} from 'primeng/inputtext';
// import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
