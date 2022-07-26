import { Injectable } from '@angular/core';
import { LoginConfig } from '../login.config';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  public loginConfig!: LoginConfig;

  constructor() { }

  public basePath(): Promise<string> {
      return new Promise<string>(resolve => {
        console.log('resolve');
        resolve("localhost:8080");
      });
  }
}
