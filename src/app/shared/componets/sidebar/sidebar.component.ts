import { GifsService } from './../../../gifs/services/gifs.service';
import { Component } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  constructor (private GifsService:GifsService) {
  }

  tags():string[]{
    return this.GifsService.tagsHistory;
  }
}
