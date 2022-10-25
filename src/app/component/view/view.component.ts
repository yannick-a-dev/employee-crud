import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/service/myservice.service';
import { employee } from 'src/app/entity/employeemodel';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  public empty: employee = {} as employee;
  myemployee: any;
  constructor(private employeeService: MyserviceService) { }

  ngOnInit(): void {
    this.getmyuser();
  }

  getmyuser() {
    this.employeeService.getuser().subscribe(res => {
      this.myemployee = res;
      //console.log(this.myemployee);

    })
  }

  deleteuser(user:any){
    if(confirm('Are you sure to delete?'))
    this.employeeService.delete(user).subscribe(() => {
      this.getmyuser();
    })
  }

}
