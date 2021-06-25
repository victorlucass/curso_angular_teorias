import { DvdService } from './../../services/dvd.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-dvd-detail',
  templateUrl: './dvd-detail.component.html',
  styleUrls: ['./dvd-detail.component.css']
})
export class DvdDetailComponent implements OnInit {

  $dvd: any;

  constructor(
    private route: ActivatedRoute,
    private service: DvdService,
    private router: Router
    ) {}

  ngOnInit(): void {
    let id: any = this.route.snapshot.paramMap.get('id');
    this.service.getById(id).subscribe(
      (dvd) => {
        this.$dvd = dvd;
        console.log(dvd)
      }
    );



  }

  goBack(){
    this.router.navigate(['/dvds'])
  }

}
