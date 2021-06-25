import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { Dvd } from './../models/dvd';
import { DvdService } from './../services/dvd.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.css']
})
export class DvdComponent implements OnInit {
  title: any;
  _dvd: Dvd[] = [];
  year: any;


  constructor(
    private service: DvdService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(
      (resource) => {
        this._dvd = resource;
      }
    )

    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        if(params.has('title')){
          this.title = params.get('title');
          this.year = params.get('year');
          console.log(this.title);
          console.log(this.year);
        }
      }
    )
  }

  goDetails(dvd: Dvd){
    this.router.navigate(['dvds', { title: dvd.title, year: dvd.year }])
  }

}
