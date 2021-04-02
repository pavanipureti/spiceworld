import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlendsComponent } from './blends/blends.component';
import { CardsComponent } from './cards/cards.component';
import { ConnectwithusComponent } from './connectwithus/connectwithus.component';
import { FooterComponent } from './footer/footer.component';
import { GiftsComponent } from './gifts/gifts.component';
import { HolidayComponent } from './holiday/holiday.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SpicesComponent } from './spices/spices.component';
import { spiceworldComponent } from './spiceworld/spiceworld.component';
import { SweetComponent } from './sweet/sweet.component';
import { TeasComponent } from './teas/teas.component';
import { WaresComponent } from './wares/wares.component';

const routes: Routes = [
  {path:"spiceworld",component:spiceworldComponent},
  {path:"spices",component:SpicesComponent},
  {path:"connectwithus",component:ConnectwithusComponent},
  {path:"cards",component:CardsComponent},
  {path:"footer",component:FooterComponent},
  {path:"holiday",component:HolidayComponent},
  {path:"sweet",component:SweetComponent},
  {path:"teas",component:TeasComponent},
  {path:"blends",component:BlendsComponent},
  {path:"gifts",component:GiftsComponent},
  {path:"wares",component:WaresComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
