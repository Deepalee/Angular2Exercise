import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProdgridComponent } from './prodgrid/prodgrid.component';
import { ProdaddComponent } from './prodadd/prodadd.component';
import { ProdeditComponent } from './prodedit/prodedit.component';

import { ProductService } from './services/product.service';
import { NumberonlyDirective } from './numbersonly.directive';
import { AlphabetsonlyDirective } from './alphabetsonly.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProdgridComponent,
    ProdaddComponent,
    ProdeditComponent,
    NumberonlyDirective,
    AlphabetsonlyDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
