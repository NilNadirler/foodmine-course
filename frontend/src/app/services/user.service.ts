import { USER_LOGIN_URL } from './../shared/constants/urls';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../shared/models/user';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { ToastrService } from 'ngx-toastr';


const USER_KEY = 'User'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(new User());
  public userObservable:Observable<User>

  constructor(private http:HttpClient, private toastrService:ToastrService) { 
        this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin: IUserLogin):Observable<User>{
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user)=>{
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to Foodmine ${user.name}! `,
            'Login Successful'
          )
          },
          error:(errorResponse)=>{
            this.toastrService.error(errorResponse.error, 'Login Failed')
          }
      })
    )
  }


  logout(){
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload()
  }
}
