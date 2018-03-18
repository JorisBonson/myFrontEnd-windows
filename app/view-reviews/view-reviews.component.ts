import { Component, OnInit } from '@angular/core';
import {ReviewService} from '../services/review.service';
import {Review} from '../models/review';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';
import {User} from '../models/user';
import {AuthLoginService} from '../services/auth-login.service';

@Component({
  selector: 'app-view-reviews',
  templateUrl: './view-reviews.component.html',
  styleUrls: ['./view-reviews.component.css']
})
export class ViewReviewsComponent implements OnInit {
  allReviews: Array<Review>;
  currentUser: User;
  constructor(private reviewService: ReviewService, private authService: AuthLoginService, private router: Router) {

  }

  ngOnInit() {
    this.reviewService.getAllReviews()
      .subscribe(data => {this.allReviews = data;
                          console.log(data);  console.log('this reviews'); console.log(this.allReviews);
        });
    this.authService.currentUserObserver.subscribe (currentUser => this.currentUser = currentUser);

  }
  deleteFilm(id) {
    this.reviewService.delete(id)
      .subscribe(res => {
        this.router.navigated = false;
        this.reviewService.getAllReviews()
          .subscribe( data => {this.allReviews = data;
          });
          this.router.navigate(['/']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
