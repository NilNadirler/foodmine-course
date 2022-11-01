import { FoodService } from './../../../services/food.service';
import { Food } from './../../../shared/models/food';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  foods:Food[]=[]

  constructor(private foodService:FoodService) {
    this.foods = foodService.getAll()
   }

  ngOnInit(): void {
    
  }



}
