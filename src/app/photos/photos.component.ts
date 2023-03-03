import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  userId: number = 0;//userid to get from route params
  albumId: number = 0;//albumid to get from route params

  photos: any;//list of photos available

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      (params) => {
        this.userId = Number(params.get('id'));
        this.albumId = Number(params.get('albumid'));
      }
    );

    //check user id and album id is valid
    if (!isNaN(this.userId) && !isNaN(this.albumId)
      && this.userId != 0 && this.albumId != 0) {
      this.getPhotos();
    }
  }

  /*
  get list of phots by user id and album id
  */
  getPhotos() {
    this.userService.getPhotos(this.userId, this.albumId).subscribe(
      (data) => {
        this.photos = data;
      },
      error => {
        console.log(error);
      }
    )
  }
}
