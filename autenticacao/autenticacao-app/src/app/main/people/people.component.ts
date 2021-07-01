import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { MainService } from '../main.service';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people$: Observable<Person[]>;

  constructor(private mainService : MainService) { }

  ngOnInit(): void {
    this.people$ = this.mainService.getPeople();
  }

}
