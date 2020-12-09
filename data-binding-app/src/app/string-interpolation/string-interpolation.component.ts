import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  person = {
    name : 'Victor',
    age: 19,
    lastname: 'Oliveira',
    adress: 'Aparecida, centro'
  }

  colors:string[] = [
    'color: blue',
    'color: red',
    'color: green',
    ''
  ]

  idx:number = 0;

  constructor() { }

  ngOnInit(): void {
    setInterval(
      ()=> this.idx = (this.idx+1) % this.colors.length
      ,1000
    );
  }

}
