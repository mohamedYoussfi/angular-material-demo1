import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public username : any;
  public roles : string[] = [];
  public authenticated : boolean =false;
  public users:any = {
    admin : ['STUDENT','ADMIN'],
    user1 : ['STUDENT']
  }
  constructor(private router : Router) { }

  public login(username : string, password : string){
    if(this.users[username] && password=="1234"){
      this.username = username;
      this.roles = this.users[username];
      this.authenticated = true;
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.authenticated=false;
    this.username = undefined;
    this.roles = [];
    this.router.navigateByUrl("/login");
  }
}
