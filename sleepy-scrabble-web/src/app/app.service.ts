import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Word } from './+state/word.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private baseUri: string;
  constructor(private http: HttpClient) {
    this.baseUri = 'http://localhost:8080/api/words';
  }

  getAllWords: () => Observable<any> = () => {
    return this.http.get(this.baseUri);
  }

  saveNewWord(word: Word): Observable<any> {
    return this.http.post(this.baseUri, word);
  }

  validateWord(word: string): Observable<any> {
    return this.http.post(this.baseUri + '/validate', word);
  }
}
