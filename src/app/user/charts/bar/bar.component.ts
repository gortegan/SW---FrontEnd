import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styles: []
})
export class BarComponent implements OnInit {
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  @Input() public barChartLabels: string[] = [];
  @Input() public barChartData: any[] = [];
  constructor() { }

  ngOnInit() {
  }

}
