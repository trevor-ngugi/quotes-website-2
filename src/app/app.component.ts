import { Component } from '@angular/core';
import{Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  quotes:Quote[]=[
    {id:1,define:'work hard play hard'},
    {id:2 ,define:'african warriors'}
  ]
  
}
