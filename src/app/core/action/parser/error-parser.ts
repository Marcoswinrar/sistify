import { HttpErrorResponse } from '@angular/common/http';

export class ErrorParser {

  static parseError(message: HttpErrorResponse): string {
      return message.error;
  }
}
