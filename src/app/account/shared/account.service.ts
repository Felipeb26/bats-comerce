import { Injectable } from '@angular/core';
import { setCookie } from "typescript-cookie";
import { Encoder } from 'typescript-cookie/dist/types';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  login(user:any){
    const write: Encoder<string> = (value) => value.toUpperCase();
    return new Promise((resolve) =>{
      setCookie("token", "true",{secure: true},{encodeValue: write});
      resolve(true)
    });
  }

  createAcc(account:any){
    return new Promise((resolve) =>{
      resolve(true)
    })
  }
}
