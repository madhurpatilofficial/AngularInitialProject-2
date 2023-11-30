import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-node-server',
  templateUrl: './node-server.component.html',
  styleUrls: ['./node-server.component.css']
})
export class NodeServerComponent implements OnInit {

  customer : any = [];
  constructor(private httpClient: HttpClient) {

   }

  ngOnInit(): void {
    this.httpClient.get("http://localhost:1000/records").subscribe(data =>{
      console.log(data);
      this.customer = data;
    })

  }

}
