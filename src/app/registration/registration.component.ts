import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  email:string
  password:string
  confirmPassword:string

  constructor(private users:UsersService, private router:Router) { }

  ngOnInit(): void {
  }

  register(event){
    if(this.password === this.confirmPassword){
      this.users.registerUser({email:this.email, password:this.password})
      this.router.navigate(['login'])
    }
    else{
      alert('Passwords do not match')
    }
  }

}
