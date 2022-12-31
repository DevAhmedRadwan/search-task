import { Component } from '@angular/core';
import { Observable, EMPTY } from 'rxjs';
import { DashboardService } from './dashboardService/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  customers$: Observable<any> = EMPTY;
  filter = { criteria: '', operation: '', value: '' };

  constructor(private dashboardService: DashboardService) {}

  onSubmit(): void {
    console.log(this.filter);

    this.customers$ = this.dashboardService.getCustomersFiltered(
      this.filter.criteria,
      this.filter.operation,
      this.filter.value
    );

    console.log(this.customers$);
  }
}
