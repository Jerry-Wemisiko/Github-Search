export interface RepoInterface{
   name:string;
   html_url:string;
   description:string;
   homepage:string;
   downloads_url:string

   repoInfo( name:string,html_url:string,description:string,homepage:string,downloads_url:string):void;
}