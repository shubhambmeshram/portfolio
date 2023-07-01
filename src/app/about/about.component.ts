import { Component } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  data:any = [{"name":"Shubham Meshram"}];
  constructor(private service:TestService) {
    this.service.getRequest().subscribe((res) => {
      console.log(res)
      this.data=res;
    })
  }
  stateOptions: any[] = [{label: ' Shubham', value: 'off'}, {label: 'Meshram', value: 'on'}];
  value:any='off';
}
