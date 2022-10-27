import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   data: any

  constructor(private service:ApiService) {}

  ngOnInit(): void {
    this.service.getPosts()
    .subscribe(res => {
      this.data = res;
      console.log(this.data)
    });
}
  }


