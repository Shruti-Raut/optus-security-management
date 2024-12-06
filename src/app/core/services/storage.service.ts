import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  
  /*****************************************************************
      getValue()
      param1 : key
      purpose : this method will return the value of {key} from localstorage
  *******************************************************************/
      public getValue(key: string): string {
        return localStorage.getItem(key)!;
    }
  
    /*****************************************************************
        setValue()
        param1 : key
        param2: value
        purpose : this method will store the {value} of {key} to localstorage
    *******************************************************************/
    public setValue(key: string, value: string): void {
        localStorage.setItem(key, value);
    }
  
    /*****************************************************************
        removeKey()
        param1 : key
        purpose : this method will remove {key} and it's value from localstorage
    *******************************************************************/
    public removeKey(key: string): void {
        localStorage.removeItem(key);
    }
  
    /*****************************************************************
        removeAll()
        purpose : this method will remove everything from localstorage
    *******************************************************************/
    public removeAll(): void {
        localStorage.clear();
    }
  
    public clearAll(): void {
      localStorage.clear();
  }
}
