import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "../../environments/environment.prod";
import { Plugins } from '@capacitor/core';
import { timeout } from 'rxjs/operators';

const { Network } = Plugins;
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  networkStatus : boolean;
  
   
  constructor(private http: HttpClient) { 
    
  }

  private getHeader(data_header?:any){
    const data = localStorage.getItem('data');
    let  header = {};
    if(data){
      const y = JSON.parse(data);
      const options= {
        Authorization: `Bearer ${y.token}`
      }
      if(data_header){
        Object.keys(data_header).forEach(key=>{
          options[key]=data_header[key]
        })
      }
      const headers= new HttpHeaders(options);
      header = {
        headers
      };
      console.log("Header",header)
    }
    return  header;
  }

  get(url: string, useSecondUrl? : boolean) {
    let url_base = !useSecondUrl ? environment.BASEURL : environment.SECONDARY_URL;
    console.log("Url",`${url_base}${url}`)
    return this.http.get(`${url_base}${url}`,this.getHeader()).pipe(timeout(30000));
  }

   post(url: string, body: Object, useSecondUrl? : boolean, headers?:any) {
    let url_base = !useSecondUrl ? environment.BASEURL : environment.SECONDARY_URL
    console.log("Url",`${url_base}${url}`)
    return this.http.post(`${url_base}${url}`,body,this.getHeader(headers)).pipe(timeout(30000));
  }

  put(url: string, body: Object,useSecondUrl? : boolean) {
    let url_base = !useSecondUrl ? environment.BASEURL : environment.SECONDARY_URL
    return this.http.put(`${url_base}${url}`,body,this.getHeader()).pipe(timeout(10000));
  }

  delete(url: string,useSecondUrl? : boolean) {
    let url_base = !useSecondUrl ? environment.BASEURL : environment.SECONDARY_URL
    return this.http.delete(`${url_base}${url}`,this.getHeader()).pipe(timeout(10000));
  }
}
