import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from "./welcome/welcome.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ImprintComponent } from "./imprint/imprint.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  { path: "imprint", component: ImprintComponent },
  { path: "contact", component: ContactComponent },
  { path: "", component: WelcomeComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
