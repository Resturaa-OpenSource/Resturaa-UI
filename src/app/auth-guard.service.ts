import { Injectable } from '@angular/core';
import { CanActivateChild, Router } from '@angular/router';
import { TempserviceService } from './services/tempservice.service';

@Injectable()
export class AuthGuardService implements CanActivateChild {

  constructor(private temp:TempserviceService,public router: Router) { }
  canActivateChild(): boolean {
    if(this.temp.store==null || this.temp.staff ==null)
    {
      this.router.navigateByUrl('/storelogin');
      return false;
    }
   return true;
}
}
