import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Response {
    login: string,
    id: number,
    avatar_url: string,
    html_url: string,
    bio: string
}

@Injectable({
  providedIn: 'root'
})
export class IntegrantesService {
  perfilBianca: Response;
  perfilGabi: Response;
  constructor(private http: HttpClient) { }

  start() {
    this.http.get<Response>('https://api.github.com/users/gabriellicorrea'  )
        .subscribe(data => {
          this.perfilGabi = data;
          console.log("aqui", data)
        })
    
      this.http.get<Response>('https://api.github.com/users/biancad2'  )
        .subscribe(data => {
          this.perfilBianca = data;
          console.log("aqui", data)
        })
    

  }
}
