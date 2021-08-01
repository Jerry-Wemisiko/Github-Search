import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Repos } from './models/repos';
import { User } from './models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SearchHttpRequestService {
  repo: Repos;
  users: User;
  newRepo: any;
  searchRepo: any;

  constructor(private http: HttpClient) {
    this.repo = new Repos('', '', '', '', '');
    this.users = new User('', '', '', '', 0, 0, 0, '');
  }

  aboutUser(username: string) {
    interface UInterface {
      name: string;
      html_url: string;
      description: string;
      login: string;
      public_repos: number;
      followers: number;
      following: number;
      avatar_url: string;
    }
    const promise = new Promise((resolve) => {
      this.http
        .get<UInterface>(
          'https://api.github.com/users/' +
            username +
            '?access_token=' +
            environment.myApi
        )
        .toPromise()
        .then((getResponse) => {
          this.users.name = getResponse.name;
          this.users.html_url = getResponse.html_url;
          this.users.login = getResponse.login;
          this.users.avatar_url = getResponse.avatar_url;
          this.users.public_repos = getResponse.public_repos;
          this.users.followers = getResponse.followers;
          this.users.following = getResponse.following;
          resolve('done');
        });
    });
    return promise;
  }

  getUserRepos(searchPattern: string) {
    interface UInterface {
      name: string;
      description: string;
    }
    const myPromise = new Promise((resolve, reject) => {
      this.http
        .get<UInterface>(
          'https://api.github.com/users/' +
            searchPattern +
            '/repos?order=created&sort=asc?access_token=' +
            environment.myApi
        )
        .toPromise()
        .then(
          (getRepoResponse) => {
            this.newRepo = getRepoResponse;
            resolve('done');
          },
          (error) => {
            reject(error);
          }
        );
    });
    return myPromise;
  }

  getRepos(username: string) {
    interface UInterface {
      items: any;
    }
    const myPromise = new Promise((resolve, reject) => {
      this.http
        .get<UInterface>(
          'https://api.github.com/users/' +
            username +
            '/repos?order=created&sort=asc?access_token=' +
            environment.myApi
        )
        .toPromise()
        .then(
          (getRepoResponse) => {
            this.searchRepo = getRepoResponse;
            resolve('done');
          },
          (error) => {
            reject(error);
          }
        );
    });
    return myPromise;
  }
}
