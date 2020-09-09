import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string
  password: string

  constructor(private users:UsersService, private router:Router) { }

  ngOnInit(): void {
  }

  signIn(event){
    if(this.users.login(this.email,this.password)){
      this.router.navigate(['home', this.email])
    }
    else{
      alert('User does not exist')
    }
  }

  register(event){
    this.router.navigate(['register'])
  }

}
