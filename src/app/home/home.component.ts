import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  val1 = 0;
  paymentTimeArray = [];
  items;
  datas;
  selectedMonthlyRange = 0;
  selectedRange = 150000;
  startRange = 150000;
  endRange = 300000;
  rangeValues: number[] = [100000,300000];
  toggleVal = false;
  loanAmount = 100000;
  Emi = 15000;

  constructor() { }

  ngOnInit() {
    this.items = [
      {img: 'assets/Get Paid Instantly.png', title: 'Quick cash disbursement', para: 'Get terms loans that your business needs within 72 hrs'},
      {img: 'assets/Low interest rate.png', title: 'Low-interest rate', para: 'Achieve your financial goals with an amazing interest rate starting at 13% per annum'},
      {img: 'assets/Secure Payments.png', title: 'Zero Paperwork', para: 'Get started instantly by submitting only your basic details & bank statements'},
    ];

    this.datas = [
      {img: 'assets/freelancer_feature_icon.png', title: 'Ace your business finances', para: 'Manage banking, accounting & everything in between, on one platform'},
      {img: 'assets/Covid.png', title: 'Loans to fight COVID-19', para: 'Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh'},
    ];
    this.paymentTimeArray = [
      {label: '3 Months'},
      {label: '4 Months'},
      {label: '6 Months'},
      {label: '9 Months'},
    ]
  }

  handleChange(e) {
    this.toggleVal = e.checked;
    console.log(e.checked);
  }

}
