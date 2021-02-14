import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private error$ = new Subject<string>();
  private searchedWord$ = new Subject<string>();
  constructor(private httpCLient: HttpClient) {}

  public setError(message: string) {
    this.error$.next(message);
  }

  public getError(): Observable<string> {
    return this.error$.asObservable();
  }

  public searchedWorldSubmitted(word: string) {
    this.searchedWord$.next(word);
  }

  public getSearchTerm(): Observable<string> {
    return this.searchedWord$.asObservable();
  }

  public getImages(term: string, imagesPerPage: number, currentPage: number): Observable<any> {
    const API_KEY = '20275783-639fdbeaf39cc3c1c13607ca4';
    const URL = 'https://pixabay.com/api/?key=' + API_KEY + '&q=' + term + '&per_page=' + imagesPerPage + '&page=' + currentPage ;
    return this.httpCLient.get(URL);

  }
}
