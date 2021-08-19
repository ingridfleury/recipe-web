import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecipeComponent } from './recipe/recipe.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { RegisterComponent } from './register/register.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { HeaderComponent } from './home/header/header.component';
import { MainComponent } from './home/main/main.component';
import { FooterComponent } from './home/footer/footer.component';
import { CarouselComponent } from './home/main/carousel/carousel.component';
import { CardsComponent } from './home/main/cards/cards.component';
import { ErrorPageComponent } from './error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RecipeComponent,
    NewRecipeComponent,
    RegisterComponent,
    MyProfileComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CarouselComponent,
    CardsComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
