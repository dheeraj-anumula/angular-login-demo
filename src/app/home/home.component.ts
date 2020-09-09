import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:string
  constructor(private route:ActivatedRoute, private users: UsersService, private router:Router) { }

  ngOnInit(): void {
    this.user = this.route.snapshot.params['email'];
  }

  signOut(event){
    this.users.loggedIn =false
    this.router.navigate(['login'])
  }

}
