import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {

  artistas:any[] = [];
  urlSpotify:string = 'https://api.spotify.com/v1/';
  token:string = 'BQBqcdN8oF-bhWXZq_xnh3d7k8H4-r0-pSWK0L7ryYY1MNiAtGIYlsiv5tVHiPk3OyC3uWq4CyYpXnXO19A';

  constructor(public http:HttpClient) {
    console.log('Servicio de Spotify listo');
  }

  private getHeaders(): HttpHeaders{
    let headers = new HttpHeaders({
      'authorization':'Bearer '+ this.token
    });
    return headers;
  }

  getTop(id:string){
    let url = `${this.urlSpotify}artists/${id}/top-tracks?country=ES`;

    let headers = this.getHeaders();

    return this.http.get(url, { headers });
  }

  getArtista(id:string){
    let url = `${this.urlSpotify}artists/${id}`;

    let headers = this.getHeaders();

    return this.http.get(url, { headers });

    // .map((resp:any) => {
    //   this.artistas = resp.artists.items;
    //   return this.artistas;
    // });

  }

  getArtistas(termino:string){

    let url = `${this.urlSpotify}search?query=${termino}&type=artist&limit=20`;

    let headers = this.getHeaders();

    return this.http.get(url, { headers }).map((resp:any) => {
      this.artistas = resp.artists.items;
      return this.artistas;
    });


  }

}
