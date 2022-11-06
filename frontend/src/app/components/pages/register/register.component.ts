import { PasswordsMatchValidator } from './../../../shared/validators/password_match_validator';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../../services/user.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IUserRegister } from 'src/app/shared/interfaces/IUserRegister';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!:FormGroup;
  isSubmitted= false;

  returnUrl =''

  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService,
    private activatedRoute: ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.registerForm= this.formBuilder.group({
      name:['',Validators.required],
      email:['', [Validators.required,Validators.email]],
      password:['', Validators.required],
      confirmPassword:['', Validators.required],
      address:['', Validators.required]
    },{
      validators:PasswordsMatchValidator('password', 'confirmPassword')
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  get fc(){
    return this.registerForm.controls;
  }


  submit(){
    this.isSubmitted = true;
    if(this.registerForm.invalid) return;

    const fv= this.registerForm.value;
    const user: IUserRegister={
      name:fv.name,
      email:fv.email,
      password:fv.password,
      confirmPassword:fv.confirmPassword,
      address:fv.address

    };

    this.userService.register(user).subscribe(_=>{
      this.router.navigateByUrl(this.returnUrl);
    })
  }

}
