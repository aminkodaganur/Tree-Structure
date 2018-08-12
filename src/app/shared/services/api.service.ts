import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {

    headers: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    useMock = false;
    mockApiURLOrigin: string = 'http://localhost:4200'
    liveApiUrlOrigin: string = ''
    fetchingData = false;

    constructor(private http: HttpClient) { }

    get(path: string, useMock?: boolean, headers?: {}): Observable<any> {
        let url = this.getApiPath(useMock);
        return this.http.get(url + path, headers)
            .catch(err => {
                console.log(`FAIL:: ${err}`);
                return Observable.throw(err);
            })
            .map(res => {
                return this.getJson(res);
            });
    }

    private getJson(response: any) {
        if (response.hasOwnProperty('_body')) {
            response = response['_body'];
        }
        return response;
    }

    private getApiPath(useMock) {
        if (useMock) {
            return this.mockApiURLOrigin;
        }
        return this.liveApiUrlOrigin;
    }

    post(path: string, body: {}, useMock?: boolean): Observable<any> {
        let url = this.getApiPath(useMock);
        return this.http.post(url + path, body, { headers: this.headers })
            .catch(err => {
                console.log(`FAIL:: ${err}`);
                return Observable.throw(err);
            })
            .map(res => {
                return this.getJson(res);
            });
    }

    put(path: string, body: {}, useMock?: boolean): Observable<any> {
        let url = this.getApiPath(useMock);
        return this.http.put(url + path, body, { headers: this.headers })
            .catch(err => {
                console.log(`FAIL:: ${err}`);
                return Observable.throw(err);
            })
            .map(res => {
                return this.getJson(res);
            });
    }

    delete(path: string, body?: Object, useMock?: boolean): Observable<any> {
        let url = this.getApiPath(useMock);
        let options = {
            params: new HttpParams()
        };
        options.params.set('Content-Type', 'application/json');
        if (body) {
            options['body'] = body;
        }
        return this.http.delete(url + path, options)
            .catch(err => {
                console.log(`FAIL:: ${err}`);
                return Observable.throw(err);
            })
            .map(res => {
                return this.getJson(res);
            });
    }
}
