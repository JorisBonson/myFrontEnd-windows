import { Component, OnInit } from '@angular/core';
import { FileUploadInputFor, MatFileUpload, MatFileUploadQueue} from 'angular-material-fileupload';
import {Review} from '../models/review';
import {ReviewService} from '../services/review.service';
import {AuthLoginService} from '../services/auth-login.service';
import {User} from '../models/user';
import {Router} from '@angular/router';


@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent implements OnInit {
  htmlContent: string;
  newReview= new Review();
  currentUser = new User();
  constructor(private reviewService: ReviewService,  private router: Router) { }

  ngOnInit() {
  }

  createReview() {

    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.newReview.reviewer = this.currentUser._id;
    console.log(this.newReview);

    this.reviewService.create(this.newReview)
      .subscribe(res => {
        let id = res['_id'];
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
      }
    );

  }
}
