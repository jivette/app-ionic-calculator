import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment/payment.service';

interface Payment {
  fecha: string;
  hora: string;
  monto: number;
  nombre: string;
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})

export class PaymentPage implements OnInit {
  public loading: boolean;
  public results: Payment[];

  constructor(private payItem: PaymentService) {
    this.loading = false;
    this.results = [];
  }

  ngOnInit() {
    this.doGetPayment();
  }

  async doGetPayment() {
    this.loading = true;
    try {
      const response: any = await this.payItem.getPayment();
      const data = JSON.parse(response.data);
      this.results = data.gastos;

    } catch (error) { console.log(JSON.stringify(error)); }
    this.loading = false;
  }
}
