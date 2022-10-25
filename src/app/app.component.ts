import { Component } from '@angular/core';
import { employee} from './entity/employeemodel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employeecrud';
  public empty: employee = {} as employee;
}
