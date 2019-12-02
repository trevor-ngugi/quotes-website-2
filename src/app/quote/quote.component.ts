import { Component, OnInit } from '@angular/core';
import{Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1,'work hard play hard','trevor','trevor',new Date(2019,10,30)),
    new Quote(2 ,'When you can’t find the sunshine, be the sunshine','ngugi', 'trevor',new Date(2019,2,14)),
    new Quote(3 ,'The grass is greener where you water it ','john', 'trevor',new Date(2019,2,14)),
    new Quote(4 ,'Wherever life plants you, bloom with grace ','phillip', 'trevor',new Date(2019,2,15)),
    new Quote(5 ,'Little by little, day by day, what is mean for you WILL find its way ','messi', 'trevor',new Date(2019,9,10)),
    new Quote(6 ,' am in charge of how I feel and today I am choosing happiness ','crystal', 'trevor',new Date(2019,7,7)),
    new Quote(7 ,'Learn from yesterday, live for today, hope for tomorrow ','jenkins', 'trevor',new Date(2019,1,15)),
    new Quote(8 ,'Take time to do what makes your soul happy ','wakiritho', 'trevor',new Date(2019,6,17)),
    new Quote(9 ,'Be so happy that when others look at you, they become happy too ','cole', 'trevor',new Date(2019,2,20)),
    new Quote(10 ,'Believe. Act as if. Live like you already have it. It’s coming ','huncho', 'trevor',new Date(2019,3,14)),
    
  ]

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.postDate = new Date(quote.postDate)
    this.quotes.push(quote)
  }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
