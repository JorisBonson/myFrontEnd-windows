import { Component, OnInit } from '@angular/core';
import {Review} from '../models/review';
import {ReviewService} from '../services/review.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-review',
  templateUrl: './edit-review.component.html',
  styleUrls: ['./edit-review.component.css']
})
export class EditReviewComponent implements OnInit {
  editReview: Review;
  constructor(private reviewService: ReviewService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.reviewService.getReviewByID(this.route.snapshot.params.id)
      .subscribe(data => this.editReview = data);
  }

  edit(){
    this.reviewService.updateFilm(this.editReview)
      .subscribe(res => {this.router.navigate(['/'])});
  }


}
