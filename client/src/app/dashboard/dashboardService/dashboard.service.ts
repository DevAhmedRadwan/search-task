import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly userUrl = environment.backendURL;

  constructor(private http: HttpClient) {}

  getCustomersFiltered(
    criteria: string,
    operation: string,
    value: string
  ): Observable<any> {
    return this.http.get<any>(this.userUrl + 'customer', {
      params: { criteria, operation, value },
    });
  }
}
