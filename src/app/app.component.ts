import { Component } from '@angular/core';
import * as prod from '../Model/Products.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectAngular';
 
  products : any = (prod as any).default;
  constructor(){
    console.log(prod);
  }
}