import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './template/Home-page/navbar/navbar.component';
import { CarouselComponent } from './template/Home-page/carousel/carousel.component';
import { FormsComponent } from './template/Home-page/forms/forms.component';
import { IngresarComponent } from './template/Login/ingresar/ingresar.component';
import { RegistrarComponent } from './template/Registrarse/registrar/registrar.component';
import { HttpClientModule } from '@angular/common/http';
import { DataApiService} from 'src/app/services/data-api-services';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    FormsComponent,
    IngresarComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
