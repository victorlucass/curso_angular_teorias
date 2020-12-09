import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  selectDisabled = false;
  NameChange:string;
  selectChange(event){
    this.NameChange = event.value;
  }

  myButton:string = 'My button';
  save() {
    alert('Savo com sucesso!')
  }

  i = 0;

  inc(){
    this.i++;
    this.myButton = 'it was clicked ' + this.i + ' times';
  }

  disable(){
    this.btnEnable= false;
    this.spinnerMode='indeterminate';
    this.i = 0;
    setTimeout(
      ()=>{
        this.btnEnable=true;
        this.spinnerMode='determinate';
      }
      ,3000
    )
  }

  spinnerMode = 'determinate';
  btnEnable= true;

  cbChange(event) {
    console.log(event.checked);
    this.selectDisabled = event.checked;
  }

  inputEvent(event) {
    event = console.log(event.target.value);
  }

  inputName ='Lucas';

  constructor() { }

  ngOnInit(): void {
  }

}
