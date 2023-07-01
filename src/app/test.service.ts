import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TestService {

  url:string="https://jsonplaceholder.typicode.com/posts";

  list:any=[
    {
      'name': 'shubham',
      'profession': 'developer',
      'place':'Puen'
    }
  ]

  constructor(private service:HttpClient) { }
  getRequest() {
    return (
      // this.service.get(this.url),
      this.service.get(this.list)
      ) 
  };
}
