import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpicesComponent } from './spices/spices.component';
import { BlendsComponent } from './blends/blends.component';
import { TeasComponent } from './teas/teas.component';
import { GiftsComponent } from './gifts/gifts.component';
import { ConnectwithusComponent } from './connectwithus/connectwithus.component';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { RecipesComponent } from './recipes/recipes.component';
import { WaresComponent } from './wares/wares.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    SpicesComponent,
    BlendsComponent,
    TeasComponent,
    GiftsComponent,
    ConnectwithusComponent,
    CardsComponent,
    FooterComponent,
    RecipesComponent,
    WaresComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }