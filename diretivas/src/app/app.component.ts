import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas';
  theme = 'escuro';

  alterTheme(event) {
    event.checked ? this.theme = 'escuro' : this.theme = 'claro';
    console.log(event);
  }
}
