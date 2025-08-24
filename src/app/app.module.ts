import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookAFlightComponent } from './book-a-flight/book-a-flight.component';
import { PnrsComponent } from './pnrs/pnrs.component';
import { SalesCeilingComponent } from './sales-ceiling/sales-ceiling.component';
import { PoliciesComponent } from './policies/policies.component';
import { ReportsComponent } from './reports/reports.component';
import { UserListComponent } from './user-list/user-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { NgChartsModule } from 'ng2-charts';
import { FooterComponent } from './footer/footer.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { BookingRecordsComponent } from './booking-records/booking-records.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    BookAFlightComponent,
    PnrsComponent,
    SalesCeilingComponent,
    PoliciesComponent,
    ReportsComponent,
    UserListComponent,
    FooterComponent,
    BookingRecordsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatIconModule,
    NgChartsModule,
    NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
