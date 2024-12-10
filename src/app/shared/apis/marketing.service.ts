import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, retry, throwError } from 'rxjs';
import { StorageService } from 'src/app/core/services/storage.service';
import { environment } from 'src/environments/environment.deveploment';

@Injectable({
  providedIn: 'root'
})
export class MarketingService {
  private marketBaseUrl = environment.appConstants.marketingApi;

  constructor(private http: HttpClient) { }

  SaveQuestionAndAnswer(SaveObj: any) {
    return this.http
      .post(this.marketBaseUrl + '/evaluate-answer', SaveObj)
      .pipe(catchError(this.handleError));
  }

  pdfEvaluation(SaveObj: any) {
    return this.http
      .post(this.marketBaseUrl + '/evaluate-pdf', SaveObj)
      .pipe(catchError(this.handleError));
  }


  UploadFile(formData: any) {
    return this.http
      .post(this.marketBaseUrl + '/uploadfile', formData)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError(error);
  }
}
