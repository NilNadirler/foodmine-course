import { FOOD_URL, FOOD_BY_SEARCH_URL, FOOD_TAGS_URL, FOOD_BY_ID_URL, FOODS_BY_TAG_URL } from './../shared/constants/urls';
import { Food } from './../shared/models/food';
import { Injectable } from '@angular/core';
import { Tag } from '../shared/tag';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getAll():Observable<Food[]>{
   return this.http.get<Food[]>(FOOD_URL);
  }

  getAllFoodsBySearchTerm(searchTerm:string){
    return this.http.get<Food[]>(FOOD_BY_SEARCH_URL+searchTerm)
  }

  getAllTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(FOOD_TAGS_URL);
  }

  getAllFoodsByTag(tag:string):Observable<Food[]>{

    return tag ==="ALL"?this.getAll(): this.http.get<Food[]>(FOODS_BY_TAG_URL+tag)
  }

  getFoodById(foodId:string):Observable<Food>{
    return this.http.get<Food>(FOOD_BY_ID_URL+foodId)
  }
}
