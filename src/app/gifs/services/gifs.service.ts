import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory:string[] = [];

  constructor() { }

  get tagsHistory():string[]{
    // TODO: Se utiliza el [...] para romper la referencia de la propiedad o del objeto
    return [...this._tagsHistory];
  }

  public searchTag(tag:string):void{
    this._tagsHistory.unshift(tag);
    console.log(this._tagsHistory);
  }
}
