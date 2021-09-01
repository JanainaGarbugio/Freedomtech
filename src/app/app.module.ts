import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjetoComponent } from './projeto/projeto.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { FooterComponent } from './footer/footer.component';
import { CarrosselComponent } from './carrossel/carrossel.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetoComponent,
    SobreNosComponent,
    FooterComponent,
    CarrosselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
