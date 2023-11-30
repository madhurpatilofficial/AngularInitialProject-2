
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-rest-component',
  templateUrl: './restcomponent.component.html',
  styleUrls: ['./restcomponent.component.css']
})
export class RestcomponentComponent implements OnInit {
  users: any = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get("http://localhost:2020/users").subscribe(data =>{
      console.log(data);
      this.users = data;
    })

  }


}
