import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';
import {appConfig} from '../app.config';
import {Review} from '../models/review';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ReviewService {
  headers: HttpHeaders;

  constructor(private http: HttpClient) {

  }

  create(review: Review) {
    console.log(review);

    return this.http.post(appConfig.apiUrl + '/api/film', review);
  }

  getAllReviews(): Observable<Array<Review>> {
    try {

      return this.http.get(`${appConfig.apiUrl}/api/film`).map(res => res as Array<Review> || []) ;
    } catch (error) {
      console.log(error.msg);
    }
  }

  getReviewByID(id: string): Observable<Review>{
    try {
      return this.http.get(`${appConfig.apiUrl}/api/film` + id).map(res => res as Review) ;
    } catch (error) {
      console.log(error.msg);
    }
  }

  updateFilm(review: Review) {
    return this.http.put(`${appConfig.apiUrl}/api/film` + review._id , review);
  }

  delete(id: string) {
    return this.http.delete(`${appConfig.apiUrl}/api/film` + id);
  }
}
