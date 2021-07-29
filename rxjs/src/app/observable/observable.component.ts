import { Component, OnInit } from '@angular/core';
import { interval, Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  id = 0;
  value = 'Início';
  subscription!: Subscription;

  constructor() { }

  ngOnInit(): void {
    /*const observable = new Observable(
      (observer: Observer<number>) => {
        for (let i = 1; i < 5; i++) {
          observer.next(i);
        }
        observer.complete();
      }
    );

    observable.subscribe(
      (value: number) => {
        console.log(value);
      }
    );

    const timeCount = interval(5000);
    timeCount.subscribe(
      (value: number) => {
        console.log(value);
      }
    );

    console.log("Após timeCount()!")
    */

    const cronometro = new Observable(
      (observer: Observer<number>) => {
        let i = 0;
        console.log("pré interval");
        const intervalo = setInterval(
          () => {
            i++;
            observer.next(i);
            console.log("Número da vez: " + i);
            if (i == 10) {
              console.log("Chegou em 10!")
              observer.complete();
              clearInterval(intervalo); //Para finalizar o setInterval()
            }
          }, 1000);
        console.log("pós interval")
        // return () => {
        //   console.log("Último método")
        //   clearInterval(intervalo);
        // }
      }
    )

    this.subscription = cronometro.subscribe(
      (number: number) => {
        this.id = number;
      },
      (error) => { },
      () => {
        this.value = "Acabou o tempo /_/"
        this.id = 0
      }
    )
    setInterval(
      () => {
        this.subscription.unsubscribe();
      }, 10000
    )
  }
}
