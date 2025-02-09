import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../services/Interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor( private GifsService:GifsService){}

  get gifs():Gif[]{
    return this.GifsService.gifsLis;
  }
}
