import { Component, OnInit } from '@angular/core';
// import { clearInterval } from 'timers';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  miliseconds: number = 0;
  private interval : any;
  private running = false;
  constructor() { }

  ngOnInit(): void {
  }

  start() {
    this.interval = setInterval(
      () => {
        this.miliseconds += 50;
      }, 50
    );
  }

  stop(){
    if(this.running) {
      clearInterval(this.interval);
      this.running = false;
    }
  }

  clear(){
    this.miliseconds = 0;
  }

  private round(n:number) : number {
    return Math.round(n);
  }

}
