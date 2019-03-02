import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { DataApiService } from 'src/app/services/data-api-services';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  array:any = [];
  constructor(private dataApi: DataApiService) {
    

   }

  ngOnInit() {
   this.getListProyectos();
    
  }
    getListProyectos()
  {
      this.dataApi.getAllProjects()
     .subscribe((projects) =>  {this.array = projects});

    
    
     
  }

  getData(result){
   
    this.array = result
    console.log(result);
    
  }

}
