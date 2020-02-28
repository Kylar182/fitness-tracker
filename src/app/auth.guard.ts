import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './_services/auth.service';

@Injectable()
export class Authguard implements CanActivate {
  constructor(private authServie: AuthService, private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authServie.isAuth()) {
      return true;
    } else {
      this.router.navigate(['/login']);
    }
  }
}
