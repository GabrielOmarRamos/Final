import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImg($event:any, name: string){
    const file = $event.target.files[0]
    const imgRef = ref(this.storage, `imagenes/`+name)
    uploadBytes(imgRef, file)
    .then(Response => {this.getImg()})
    .catch(error => console.log(error))
  }

  getImg(){
    const imageRef = ref(this.storage, 'imagenes')
    list(imageRef)
    .then(async response => {
      for(let item of response.items){this.url = await getDownloadURL(item);
      console.log("URL: "+this.url);}
    })
    .catch(error => console.log(error))
  }
}