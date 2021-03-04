import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { LadderComponent } from './ladder/ladder.component';
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  { path: 'ladder', component: LadderComponent },
  { path: 'register', component: RegisterComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LadderComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
