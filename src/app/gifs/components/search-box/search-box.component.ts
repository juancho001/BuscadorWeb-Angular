import { GifsService } from './../../services/gifs.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  standalone: false,
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {

  @ViewChild('stringSearch')
  public tagInput!: ElementRef<HTMLInputElement>;
  constructor( private GifsService:GifsService){}

  searchTag():void{
    const newTag = this.tagInput.nativeElement.value;
    this.GifsService.searchTag(newTag);
    this.tagInput.nativeElement.value = '';
  }
}
