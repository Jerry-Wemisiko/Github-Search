// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { User } from '../models/user';
// import { environment } from 'src/environments/environment';

// @Injectable({
//   providedIn: 'root',
// })
// export class UserService {
//   users: User;

//   constructor(private http: HttpClient) {
//     this.users = new User('', '', '', '', 0, 0, 0, '');
//   }

//   //Multiple Users
//   aboutUser(username: string) {
//     interface UInterface {
//       name: string;
//       html_url: string;
//       description: string;
//       login: string;
//       public_repos: number;
//       followers: number;
//       following: number;
//       avatar_url: string;
//     }
//     const promise = new Promise((resolve) => {
//       this.http
//         .get<UInterface>(
//           'https://api.github.com/users/' +
//             username +
//             '?access_token=' +
//             environment.myApi
//         )
//         .toPromise()
//         .then((getResponse) => {
//           this.users.name = getResponse.name;
//           this.users.html_url = getResponse.html_url;
//           this.users.login = getResponse.login;
//           this.users.avatar_url = getResponse.avatar_url;
//           this.users.public_repos = getResponse.public_repos;
//           this.users.followers = getResponse.followers;
//           this.users.following = getResponse.following;
//           resolve('done');
//         });
//     });
//     return promise;
//   }
// }
