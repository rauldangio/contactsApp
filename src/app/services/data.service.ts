import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: any = []

  constructor() { }

  saveData(index: string, data: any): boolean{
    if (index){
        this.data[index] = data
        return true
      }
    return false
  }

  getData(index:string): any{
    return this.data[index]
  }

}
