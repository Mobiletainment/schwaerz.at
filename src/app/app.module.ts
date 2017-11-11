import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ImprintComponent } from './imprint/imprint.component';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact/contact.service';
import { AgePipe } from './age.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    ImprintComponent,
    ContactComponent,
    AgePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ContactService, NgForm],
  bootstrap: [AppComponent]
})
export class AppModule { }
