import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { ShipmentManagementComponent } from './shipment/shipment-management/shipment-management.component';
import { OrganizationShipmentComponent } from './shipment/components/organization-shipment/organization-shipment.component';

@NgModule({
  declarations: [
    AppComponent,
    ShipmentManagementComponent,
    OrganizationShipmentComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
