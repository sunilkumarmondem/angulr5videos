import { Injectable } from '@angular/core';
import {HttpClient , HttpErrorResponse ,HttpHeaders } from '@angular/common/http';


import {Video} from './video';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class VideoService {

private url="/videos";
private posturl="/videos";
private puturl="/videos/";
private deleteurl="/videos/"

  constructor(private http:HttpClient) { }


  getvideos():Observable<Video[]>{
  return this.http.get<Video[]>(this.url).catch(this.errorhandler);

  }

  errorhandler(error:HttpErrorResponse){
  return Observable.throw(error.message || "server not found");

  }

  addvideo(video:Video):Observable<Video>{
 
  return this.http.post<Video>(this.posturl,video,httpOptions);
  }

  updatevideo(video:Video):Observable<Video>{
  return this.http.put<Video>(this.puturl+video._id,video,httpOptions);
  }

  deletevideo(video:Video):Observable<Video>{
  return this.http.delete<Video>(this.deleteurl+video._id);
  }



}
