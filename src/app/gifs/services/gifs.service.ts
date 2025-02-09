import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory:string[] = [];
  private apiKey: string = 'T5zzapCAAMKYlzR8xMxb1Y450luVhy3j';

  constructor() { }

  get tagsHistory():string[]{
    // TODO: Se utiliza el [...] para romper la referencia de la propiedad o del objeto
    return [...this._tagsHistory];
  }

  private organizeHistory(tag:string){
    // TODO: transforma todas las palabras a minusculas debido a que TypeScript es CaseSensitive
    tag = tag.toLowerCase();

    // TODO: valida si el arreglo contiene la nueva palabra, de ser cierto crea un nuevo arreglo sin la nueva palabra
    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag)
    }

    // TODO: ingresamos la nueva palabra al inicio del arreglo
    this._tagsHistory.unshift(tag);

    // TODO: limitamos el arregro para que visualice 10 elementos
    this._tagsHistory = this._tagsHistory.splice(0,10)
  }

  public searchTag(tag:string):void{
    if(tag.length === 0) return;
    this.organizeHistory(tag);
    // this._tagsHistory.unshift(tag);
    console.log(this._tagsHistory);
  }
}
