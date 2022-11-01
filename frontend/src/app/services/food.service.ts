import { sample_foods } from './../../data';
import { Food } from './../shared/models/food';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{

    return sample_foods;
  }
}
