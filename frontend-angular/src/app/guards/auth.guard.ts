import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot
} from '@angular/router';
import {Injectable} from "@angular/core";
import {AuthenticationService} from "../services/authentication.service";
 @Injectable()
export  class  AuthGuard  {
   constructor(private authService : AuthenticationService,
               private router : Router) {
   }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
      if(this.authService.authenticated ==true){
        return true;
      } else {
        this.router.navigateByUrl("/login")
        return false;
      }

  }
}

