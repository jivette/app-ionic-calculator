import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  apiRoot: string;
  loading: boolean;

  constructor(private http: HTTP) {
    this.loading = false;
    this.apiRoot = 'https://mvabpm6wce.execute-api.us-east-1.amazonaws.com/development/gastos';
  }

  getPayment() {
    const params = {};
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get(this.apiRoot, params, headers);
  }
}
