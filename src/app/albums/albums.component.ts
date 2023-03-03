import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent {

  userId: number = 0;//selected user id from route params
  albums: any;//list of user albums available

  constructor(private route: ActivatedRoute,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(
      (params) => {
        this.userId = Number(params.get('id'));//get user id from route params
      },
      error => {
        console.log(error);//log errors to console
      }
    )

    //check user id is valid
    if (!isNaN(this.userId) && this.userId != 0)
      this.getUserAlbums();
  }

  /* 
  get user albums by userid
  */
  getUserAlbums() {
    this.userService.getUserAlbums(this.userId).subscribe(
      (data) => {
        this.albums = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /*
  navigate to view phots page
  */
  viewPhotos(event: any) {
    let link = `/photos/${event.value[0].userId}/${event.value[0].id}`;
    this.router.navigate([link]);
  }
}
