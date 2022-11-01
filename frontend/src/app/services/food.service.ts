import { sample_foods, sample_tags } from './../../data';
import { Food } from './../shared/models/food';
import { Injectable } from '@angular/core';
import { Tag } from '../shared/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
   return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm:string){
    return this.getAll().filter(food=> food.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
  }

  getAllTags():Tag[]{
    return sample_tags;
  }

  getAllFoodsByTag(tag:string):Food[]{

    return tag ==="ALL"?this.getAll(): this.getAll().filter(food=>food.tags?.includes(tag))
  }

  getFoodById(foodId:string):Food{
    return this.getAll().find(food=> food.id== foodId)?? new Food()
  }
}
