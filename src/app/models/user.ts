export class User {
  constructor(
    public name: string,
    public html_url: string,
    public description: string,
    public login: string,
    public public_repos: number,
    public followers: number,
    public following: number,
    public avatar_url: string
  ) {}
  //    public aboutUser(name:string,bio:string,created_at:string,repos_url:string){
  //         this.name=name;
  //         this.bio=bio;
  //         this.created_at=created_at;
  //         this.repos_url=repos_url
  //    }
}
