import { Gif } from '../../services/Interfaces/gifs.interfaces';
import { GifsService } from './../../services/gifs.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'gifs-card-list',
  standalone: false,
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

@Input()
public gifs:Gif[] = [];

}
