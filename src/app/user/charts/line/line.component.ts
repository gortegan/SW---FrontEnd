import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styles: []
})
export class LineComponent implements OnInit {
  @Input() public lineChartData: Array<any> = [];
  @Input() public lineChartLabels: Array<any> = [];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartLegend = true;
  public lineChartType  = 'line';
  constructor() { }

  ngOnInit() {
  }

}
