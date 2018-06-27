import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {


  termino:string = '';

  //Inyectar el servicio
  constructor(public _spotify: SpotifyService) {


  }

  buscarArtista(){

    if(this.termino.length == 0){
      return;
    }

    //console.log(this.termino);

    this._spotify.getArtistas(this.termino).subscribe();

  }


  ngOnInit() {
  }

}
