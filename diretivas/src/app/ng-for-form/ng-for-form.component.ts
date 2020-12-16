import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  name:string = '';
  address:string = '';
  phone:string = '';
  city:string = '';
  age:number = 0;

  cities = [
    {
      name: 'Manaus', state:'AM'
    },
    {
      name: 'São Paulo', state:'SP'
    },
    {
      name: 'Maranhão', state:'MR'
    },
    {
      name: 'Pará', state:'PR'
    },
    {
      name: 'Rio de janeiro', state:'RJ'
    }
  ];

  clients = [

  ];

  load='determinate';
  disabled = false;

  delete(i:number){
    this.clients.splice(i,1);
  }

  constructor() { }

  ngOnInit(): void {
  }

  save(){
    this.load='indeterminate';
    this.disabled = true;
    setTimeout(
      ()=>
      {
        this.clients.push({
          name:this.name,
          address: this.address,
          phone: this.phone,
          age:this.age,
          city: this.city
        });

        this.cancel();
        this.load='determinate';
        this.disabled = false;
      }
      ,3000)
  }

  cancel(){
    this.name = '';
    this.address = '';
    this.phone = '';
    this.city = '';
    this.age = 0;
  }
}
