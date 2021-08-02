import { Subject, Subscription } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { DataModel } from 'src/app/gen-random-data.service';

@Component({
  selector: 'app-subject-child',
  templateUrl: './subject-child.component.html',
  styleUrls: ['./subject-child.component.scss'],
})
export class SubjectChildComponent implements OnInit {
  @Input() subject!: Subject<DataModel>;
  @Input() name!: string;
  log: string[] = [];
  connected: boolean = true;
  subscription!: Subscription;
  private setLogData(resource: DataModel) {
    this.log.push(
      'Timestamp : ' + resource.timestamp + ' data: ' + resource.data
    );
  }

  connect() {
    this.log.push('Connected!');
    this.subscription = this.subject.subscribe(
      (data: DataModel) => {
        this.setLogData(data);
        console.log(data);
      },
      (error) => {
        console.error(error);
        this.connected = false;
      },
      () => {
        this.connected = false;
        this.log.push('Finished!');
      }
    );
  }

  disconnect() {
    // console.log('Disconnect');
    // this.connected = !this.connected;
  }

  constructor() {}

  ngOnInit(): void {}
}
