// import { RepoInterface } from "../interfaces/repo";

export class Repos {
  constructor(
    public name: string,
    public html_url: string,
    public description: string,
    public homepage: string,
    public downloads_url: string
  ) {}

  //     public repoInfo(name:string,bio:string,created_at:string,repos_url:string){
  //         this.name=name;
  //         this.html_url=bio;
  //         this.description=created_at;
  //         this.homepage=repos_url
  //     }
  // }
}
