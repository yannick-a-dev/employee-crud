import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { employee } from 'src/app/entity/employeemodel';
import { gender } from 'src/app/entity/gender';
import { userposition } from 'src/app/entity/userposition';
import { MyserviceService } from 'src/app/service/myservice.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public empty: employee = {} as employee;

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
  constructor(private employeeService: MyserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  add(){
    this.employeeService.createuser(this.empty).subscribe((data: employee) => {
      alert("data add successfully")  
    this.router.navigate(['/view'])
    },
    err => {
      alert("something went wrong")
      this.router.navigate(['/'])
    })
  }

}
