import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  btnDisable: string = 'true';
  blue: string = 'primary';
  colors: string[] = [
    'primary',
    'accent',
    'warn',
    ''
  ]
  idx: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    setInterval(
      () => this.idx = (this.idx + 1) % this.colors.length
      , 1000
    );
  }

}
