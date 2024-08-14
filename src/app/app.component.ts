import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeatMapModule, TooltipService } from '@syncfusion/ej2-angular-heatmap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeatMapModule],
  providers: [TooltipService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public cellSettings: Object = {
    format: '${value}'
  };
  public paletteSettings: Object = {
    palette: [
      { color: '#C06C84' },
      { color: '#6C5B7B' },
      { color: '#355C7D' }
    ],
    type: 'Fixed'
  };
  public xAxis: Object = {
    labels: ['Nancy', 'Andrew', 'Janet', 'Margaret', 'Steven', 'Michael', 'Robert',
    'Laura', 'Anne', 'Paul', 'Karin', 'Mario']
  };
  public yAxis: Object = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  };
  public titleSettings: Object = {
    text: 'Sales Revenue per Employee (in $1000 USD)'
  };
  public heatMapData: Object[] = [
    [73, 39, 26, null, 94, 0],
    [93, 58, 53, 38, 26, 68],
    [99, 28, null, 4, 66, 90],
    [14, 26, 97, 69, 69, 3],
    [7, null, 47, 47, 88, 6],
    [41, 55, 73, 23, 3, 79],
    [56, 69, 21, 86, 3, 33],
    [45, 7, 53, null, 95, 79],
    [60, 77, 74, 68, 88, 51],
    [25, 25, null, 12, 78, 14],
    [25, 56, 55, 58, 12, 82],
    [74, 33, null, 23, 86, 59]
 ];
  title = 'myangularapp';
}
