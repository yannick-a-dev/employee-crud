import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/service/myservice.service';
import { employee } from 'src/app/entity/employeemodel';
import { userposition } from 'src/app/entity/userposition';
import { gender } from 'src/app/entity/gender';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public empty: employee = {} as employee;
  public dataid: any;
  public mydata: any;

  usergender: gender[] = [
    {
      value: 'male',
      viewvalue: 'male'
    },
    {
      value: 'female',
      viewvalue: 'female'
    }

  ]
  position: userposition[] = [
    {
      value: 'Angular developer',
      viewvalue: 'Angular developer'
    },
    {
      value: 'React developer',
      viewvalue: 'React developer'
    },
    {
      value: 'Java developer',
      viewvalue: 'Java developer'
    }

  ]
  constructor(private employeeService: MyserviceService, private activatedroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((param: Params) => {
    this.dataid = param.get('dataid');
    })
    this.employeeService.fetchdata(this.dataid).subscribe((data: any) => {
    this.empty = data;
    })
  }

  updatedata(){
    this.employeeService.update(this.empty, this.dataid).subscribe((data: any) => {
      alert('data updated successfully!!!')
    this.router.navigate(['/view'])
    })
  }

}
