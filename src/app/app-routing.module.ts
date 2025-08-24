import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookAFlightComponent } from './book-a-flight/book-a-flight.component';
import { PnrsComponent } from './pnrs/pnrs.component';
import { SalesCeilingComponent } from './sales-ceiling/sales-ceiling.component';
import { ReportsComponent } from './reports/reports.component';
import { UserListComponent } from './user-list/user-list.component';
import { BookingRecordsComponent } from './booking-records/booking-records.component';
import { PoliciesComponent } from './policies/policies.component';

const routes: Routes = [
   { path: 'dashboard', component: DashboardComponent },
  { path: 'book-a-flight', component: BookAFlightComponent },
  { path: 'pnrs', component: PnrsComponent },
  { path: 'booking-records', component: BookingRecordsComponent },
  { path: 'sales-ceiling', component: SalesCeilingComponent },
  { path: 'policy', component: PoliciesComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'user-list', component: UserListComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' } // default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
