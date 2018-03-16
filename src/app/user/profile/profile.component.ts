import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public doughnutChartLabels: string[] = ['Europa', 'America', 'Asia'];
  public doughnutChartData: number[] = [50, 30, 20];
  public doughnutChartType = 'doughnut';

  public lineChartData: Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Proyecto A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Proyecto B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Proyecto C'}
  ];
  public lineChartLabels: Array<any> = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Proyecto A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Proyecto B'}
  ];
  public prevLineChartData: Array<any> = [
    {data: [40, 59, 60, 61, 66, 75, 70], label: 'Tu empresa'},
  ];
  public prevLineChartLabels: Array<any> = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
  constructor() { }

  ngOnInit() {
  }


}
