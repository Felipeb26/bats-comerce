import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheResolverService {
  private cache = new Map<string, [Date, HttpResponse<any>]>();
  constructor() { }

  set(Key: string, value: HttpResponse<any>, timeTolive: number | null = null){
    console.log(`Set cahce key`,Key)
    if(timeTolive){
      const expiresIn = new Date();
      expiresIn.setSeconds(expiresIn.getSeconds()+timeTolive);
      this.cache.set(Key, [expiresIn, value]);
    }else{
      this.cache.set(Key, [null!, value]);
    }
  }

  get(key: string){
    const tuple = this.cache.get(key)
    if(!tuple) return null;
    const expiresIn = tuple[0];
    const httpSavedResponse = tuple[1];
    const now = new Date();
    
    if(expiresIn && expiresIn.getTime() < now.getTime()){
      this.cache.delete(key)
      return null;
    }
    return httpSavedResponse;
  }
}
