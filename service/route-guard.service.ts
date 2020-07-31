import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{ //needs to implement CanActivate from Angular

  constructor(
    private hardcodedAuthenticationService: HardcodedAuthenticationService, 
    private router: Router) { 

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){

    if (this.hardcodedAuthenticationService.isUserLoggedIn())
      return true;

    this.router.navigate(['login']); //routes to login when try to access a path when not logged in
    return false;
  }
}
