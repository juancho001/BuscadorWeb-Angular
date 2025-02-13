import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../services/Interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  @Input()
  public gif!:Gif;


  ngOnInit(){
    if(!this.gif) throw new Error('Gif property is required')
  }

}
