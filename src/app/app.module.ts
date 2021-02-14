// tslint:disable-next-line: quotemark
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppRoutingModule } from './app-routing.module';
// tslint:disable-next-line: quotemark
import { AppComponent } from "./app.component";
import { ImageSearcherComponent } from './components/image-searcher/image-searcher.component';
import { ImageListerComponent } from './components/image-lister/image-lister.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ErrorComponent } from './shared/error/error.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageSearcherComponent,
    ImageListerComponent,
    NavBarComponent,
    ErrorComponent,
    SpinnerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
