import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  url="http://localhost:3000/restourant";
  
  constructor( public http :HttpClient) { }
  sinUp(){
    console.log("hello this is login function ");
  }
  getlist(){
    return this.http.get(this.url);
  }
  saveResto(datas:any){
  //  console.warn(datas);
   return this.http.post(this.url,datas);
  }
  deleteResto(id:any){
   return this.http.delete(`${this.url}/${id}`);
  }
  UpdateProduct(productId:string){
    return this.http.get(`${this.url}/${productId}`);
  }
  editedData(data:any){
    
    return this.http.put(`${this.url}/${data.id}`,data);
  }
}
