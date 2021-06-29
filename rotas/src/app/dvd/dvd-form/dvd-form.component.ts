import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DvdService } from 'src/app/services/dvd.service';

@Component({
  selector: 'app-dvd-form',
  templateUrl: './dvd-form.component.html',
  styleUrls: ['./dvd-form.component.css']
})
export class DvdFormComponent implements OnInit {

  formDvd = this.fb.group({
    'title': [''],
    'year' : [''],
    'genre': ['']
  })

  constructor(
    private fb: FormBuilder,
    private service: DvdService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.create(this.formDvd.value);
    console.log(this.formDvd.value);
  }

  goBack(){
    this.router.navigate(['/dvds']);
  }

}
