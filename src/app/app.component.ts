import { Component,OnInit  } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig, service:TestService) {}

  data:any;

    ngOnInit() :void {
        [
          this.primengConfig.ripple = true,
        ]
    }
    title = 'my-portfio';
    date = 123;
    checked = false;
    value = " ";


    toggleStyle: boolean = false;
    toggleStyle1: boolean = false;
    toggleStyle2: boolean = false;
    toggleStyle3: boolean = false;

  toggle(){
    console.log(this.toggleStyle);
    this.toggleStyle = !this.toggleStyle;
  }

  toggle1(){
    console.log(this.toggleStyle);
    this.toggleStyle1 = !this.toggleStyle1;
  }
  toggle2(){
    console.log(this.toggleStyle);
    this.toggleStyle2 = !this.toggleStyle2;
  }
  toggle3(){
    console.log(this.toggleStyle);
    this.toggleStyle3 = !this.toggleStyle3;
  }
}


