import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from './Interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory:string[] = [];
  private apiKey: string = 'T5zzapCAAMKYlzR8xMxb1Y450luVhy3j';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs';
  public gifsLis: Gif[] = [];

  constructor(private http:HttpClient) { }

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

    const params = new HttpParams()
    .set('api_key',this.apiKey)
    .set('limit','12')
    .set('q',tag)

    this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{params})
    .subscribe(resp => {
      // console.log(resp);

      this.gifsLis = resp.data;
      // console.log( {Gif: this.gifsLis});
    })


    // this._tagsHistory.unshift(tag);
    //console.log(this._tagsHistory);
  }
}
