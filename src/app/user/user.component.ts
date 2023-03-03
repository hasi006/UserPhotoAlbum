import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  users:any;//list of users

  first:number = 0;//data-grid row start
  rows:number = 5;//data-grid number of rows per page

  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  /*
  get list of users
  */
  getUsers(){
    this.userService.getUsers().subscribe(
      (data)=> {
        this.users = data;
      },
      error =>{
        console.log(error);//log errors to console
      }
    )
  }

  /*
  navigate to albums page
   */
  viewUserAlbums(user:any) {
    let link = "/albums/" + user.id;
    this.router.navigate([link]);
  }
}
