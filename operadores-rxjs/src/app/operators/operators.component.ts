import { Component, OnInit } from '@angular/core';
import { from, fromEvent } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss'],
})
export class OperatorsComponent implements OnInit {
  listaNumeros: number[] = [];

  constructor() {}

  ngOnInit(): void {}

  mapClick() {
    from([1, 2, 3, 4, 5])
      .pipe(
        map((e) => e + 1),
        map((i) => i * 10)
      )
      .subscribe((e) => console.log(e));

    fromEvent(document, 'click')
      .pipe(map((e: MouseEventInit) => ({ x: e.screenX, y: e.screenY })))
      .subscribe((e) => console.log(e));
  }

  filterClick() {
    from([1, 2, 3, 4, 5, 6, 7, 8, 9])
      .pipe(
        filter((i) => i % 2 == 1),
        map((i) => i + 2)
      )
      .subscribe((e) => console.log(e));
  }

  tapClick() {
    from([1, 2, 3, 4, 5, 6])
      .pipe(
        filter((i: number) => i % 2 == 1),
        tap((i: number) => this.listaNumeros.push(i))
      )
      .subscribe((i) => console.log(this.listaNumeros));
  }
}
