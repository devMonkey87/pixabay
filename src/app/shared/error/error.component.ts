import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit, OnDestroy {
  public text = '';
  public show = false;
  public subscription: Subscription;

  constructor(private _imgService: ImageService) {
    this.subscription = this._imgService.getError().subscribe((data) => {
      this.displayMessage();
      this.text = data;
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  displayMessage() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, 2000);
  }
}
