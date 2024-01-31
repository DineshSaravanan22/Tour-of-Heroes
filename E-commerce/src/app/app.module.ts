import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { UpdateRestoComponent } from './update-resto/update-resto.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CustomDirective } from './custom.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'  
@NgModule({
  declarations: [
    AppComponent,
    AddRestoComponent,
    UpdateRestoComponent,
    LoginComponent,
    RegisterComponent,
    ListRestoComponent,
    HeaderComponent,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
