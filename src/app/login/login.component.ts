import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorService, Role, RoleType, User } from 'my-authenticator-lib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authenticatorService: AuthenticatorService,
              private router: Router) {
  }

  public loginAsAdmin() {
    this.authenticatorService.setCurrentUser(
        new User(1, "fabio", "strada", "fabiostrada77", [new Role(1, RoleType.ADMIN)])
    ).subscribe(() => this.toHome());
  }

  public loginAsDashboard() {
    this.authenticatorService.setCurrentUser(
        new User(1, "simone", "del castagne", "simedelcastagne", [new Role(2, RoleType.DASHBOARD)])
    ).subscribe(() => this.toHome());
  }

  public loginAsAll() {
    this.authenticatorService.setCurrentUser(
        new User(1, "alex", "cometa", "fabiostrada77", [new Role(1, RoleType.ADMIN), new Role(2, RoleType.DASHBOARD)])
    ).subscribe(() => this.toHome());
  }

  private toHome() {
    this.router.navigate(['/'])
  }
  
}
