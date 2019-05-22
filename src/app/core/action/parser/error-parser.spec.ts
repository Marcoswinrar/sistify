import { HttpErrorResponse } from '@angular/common/http';
import { ErrorParser } from './error-parser';

describe('ErrorParseTeste', () => {

  it('should receive an httpErrorResponse', () => {

    const test = new HttpErrorResponse({});

    expect(test).toEqual(jasmine.any(HttpErrorResponse));
  });

  it('should return an string', () => {

    const test = { error: 'test'};

    const erro = new HttpErrorResponse(test);
    const response = ErrorParser.parseError(erro);

    expect(response).toEqual(jasmine.any(String));

  });
});
