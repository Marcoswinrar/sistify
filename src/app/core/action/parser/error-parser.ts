import { HttpErrorResponse } from '@angular/common/http';

export class ErrorParser {

  static parseError(message: HttpErrorResponse): string {
    /**
     * My god xd;
     * */  
    return message.error.error.message;
  }
}
