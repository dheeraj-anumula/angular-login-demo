import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: Array<any> = [{email:'email', password: "password"}]
  loggedIn : boolean = false

  constructor() { }

  registerUser(user){
    this.users.push(user)
    console.log(this.users)
  }

  isLoggedIn(){
    return this.loggedIn
  }

  login(email, password){
    const user = this.users.find((user) => user.email === email && user.password === password )
    if(user){
      this.loggedIn = true
      return true
    }
    return false
  }
}
