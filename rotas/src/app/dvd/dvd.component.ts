import { Dvd } from './../models/dvd';
import { DvdService } from './../services/dvd.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css']
})
export class DvdComponent implements OnInit {

  _dvd: Dvd[] = [];

  constructor(private service: DvdService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(
      (resource) => {
        this._dvd = resource;
      }
    )
  }

}
