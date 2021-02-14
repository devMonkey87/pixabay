import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-searcher',
  templateUrl: './image-searcher.component.html',
  styleUrls: ['./image-searcher.component.scss'],
})
export class ImageSearcherComponent implements OnInit {
  imageName: string;

  constructor(private _imageService: ImageService) {
    this.imageName = '';
  }

  ngOnInit() {}

  public sendForm() {
    if (this.imageName === '') {
      this._imageService.setError('Introduzca un texto de búsqueda');
      return;
    }
    this._imageService.searchedWorldSubmitted(this.imageName);
  }
}
