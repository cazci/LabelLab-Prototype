import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url = 'http://localhost:4000/upload';

  constructor(private http: HttpClient) { }

  addImage(image_id) {
    const obj = { image_id: image_id, };
    console.log(obj);
    this.http.post(`${this.url}/add`, obj)
      .subscribe(res => console.log('Done'));
  }
}
