// import { HttpClient } from '@angular/common/http';
// import { Injectable, Output } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Repos } from '../models/repos';
// import { environment } from 'src/environments/environment';

// @Injectable({
//   providedIn: 'root',
// })
// export class ReposService {
//   repo: Repos;
//   newRepo: any;
//   searchQuery: any;

//   constructor(private http: HttpClient) {
//     this.repo = new Repos();
//   }

//   getRepos(reponame: string) {
//     interface UInterface {
//       name: string;
//       description: string;
//     }
//     const myPromise = new Promise((resolve, reject) => {
//       this.http
//         .get<UInterface>(
//           'https://api.github.com/users/' +
//             reponame +
//             '/repos?order=created&sort=asc?access_token=' +
//             environment.myApi
//         )
//         .toPromise()
//         .then(
//           (getRepoResponse) => {
//             this.newRepo = getRepoResponse;
//             resolve('done');
//           },
//           (error) => {
//             reject(error);
//           }
//         );
//     });
//     return myPromise;
//   }
// }
