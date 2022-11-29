import { Injectable } from '@angular/core';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }
  loginUser(credential:any){
    return new Promise((accept,reject)=>{
      if (
      credential.email=="test@test.com" &&
      credential.password == "pass123")
      {
        accept("login Correcto")
      } else{
        reject("Usuario o contraseña Incorrecto");
      }
    });
  }
}
