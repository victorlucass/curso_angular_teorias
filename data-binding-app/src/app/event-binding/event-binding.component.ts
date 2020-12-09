import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  myButton:string = 'click';
  save() {
    alert('Savo com sucesso!')
  }

  i = 0;

  inc(){
    this.i++;
    this.myButton = 'it was clicked ' + this.i + ' times';
  }


  constructor() { }

  ngOnInit(): void {
  }

}
