import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image-lister',
  templateUrl: './image-lister.component.html',
  styleUrls: ['./image-lister.component.scss'],
})
export class ImageListerComponent implements OnInit {
  public term = '';
  public subscription: Subscription;
  public imgList: any[] = [];
  public loading = false;
  public imagesPerPage = 30;
  public currentPage = 1;
  public totalPagesCalc = 0;

  constructor(private imageService: ImageService) {
    this.subscription = this.imageService.getSearchTerm().subscribe((data) => {
      this.term = data;
      this.currentPage = 1;
      this.loading = true;
      this.getImages();
    });
  }

  ngOnInit() {}

  getImages() {
    this.imageService
      .getImages(this.term, this.imagesPerPage, this.currentPage)
      .subscribe(
        (data) => {
          this.loading = false;
          if (!data.hits.length) {
            this.imageService.setError(
              'Oooops! We couldn`t find nothing related to your search'
            );
            return;
          }
          this.totalPagesCalc = Math.ceil(data.totalHits / this.imagesPerPage);
          this.imgList = data.hits;
        },
        (error) => {
          this.loading = false;
          this.imageService.setError('Opsss... something happened');
        }
      );
  }

  previousPage() {
    this.currentPage--;
    this.loading = true;
    this.imgList = [];
    this.getImages();
  }

  nextPage() {
    this.currentPage++;
    this.loading = true;
    this.imgList = [];
    this.getImages();
  }

  backPageClass() {
    if (this.currentPage === 1) {
      return false;
    } else {
      return true;
    }
  }
  nextPageClass() {
    if (this.currentPage === this.totalPagesCalc) {
      return false;
    } else {
      return true;
    }
  }
}
