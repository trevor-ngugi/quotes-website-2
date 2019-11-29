import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    {id:1,define:'work hard play hard'},
    {id:2 ,define:'african warriors '}
  ]

  constructor() { }

  ngOnInit() {
  }

}
