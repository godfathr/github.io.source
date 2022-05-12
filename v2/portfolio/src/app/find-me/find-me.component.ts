import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Follower } from 'src/app/models/follower';
// import { throwError } from 'rxjs/internal/observable/throwError';
// import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-find-me',
  templateUrl: './find-me.component.html',
  styleUrls: ['./find-me.component.scss']
})
export class FindMeComponent implements OnInit {
  // response: any;
  // public followers: Follower[] = new Array<Follower>();

  constructor() { }
  // constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.getProfile();
    // this.getFollowers().subscribe(data => this.followers = data);
  }

  // getProfile() {
  //   this.http.get('https://api.github.com/users/godfathr')
  //     .subscribe((response) => {
  //       this.response = response;
  //     });
  // }

  // getFollowers(): Observable<IFollower[]> {
  //   return this.http
  //     .get<IFollower[]>('https://api.github.com/users/godfathr/followers');
  //   // .map(result => result.followers);
  //   //   followers => {
  //   //   return followers.json().data.map((elt) => {
  //   //     return new Follower[](elt);
  //   //   });
  //   // })
  //   // .subscribe((followers) => {

  //   // });
  // }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error.message);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     console.error(
  //       `Backend returned code ${error.status}, ` +
  //       `body was: ${error.error}`);
  //   }
  //   // return an observable with a user-facing error message
  //   // return throwError(
  //   //   'Something bad happened; please try again later.');
  // }

}

export interface IFollower {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}
