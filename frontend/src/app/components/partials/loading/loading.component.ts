import { LoadingService } from './../../../services/loading.service';
import { BehaviorSubject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  isLoading!:boolean;

  constructor(loadingService:LoadingService) {
    loadingService.isLoading.subscribe((isLoading)=>{
       this.isLoading = isLoading;
    });
    loadingService.showLoading();
   }

  ngOnInit(): void {
  }
}
